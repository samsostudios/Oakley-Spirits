// ❌ Incorrect for Firebase v10+
// import * as functions from "firebase-functions";
// import * as admin from "firebase-admin";
// ✅ Correct for Firebase v10+
import { initializeApp } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';
import { onRequest } from 'firebase-functions/v2/https';
import { onSchedule } from 'firebase-functions/v2/scheduler';

// Initialize Firebase Admin
initializeApp();
const db = getDatabase();

/**
 * Cloud Function: Start the Raffle
 */
export const startRaffle = onRequest(async (req, res) => {
  console.log('🔥 startRaffle function triggered'); // Debug log

  if (req.method !== 'POST') {
    console.log('❌ Invalid request method');
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    console.log('📡 Fetching eligible participants...');
    const snapshot = await db.ref('eligibleParticipants').once('value');
    const entries = snapshot.val();

    if (!entries) {
      console.log('⚠️ No participants found!');
      res.status(400).json({ message: 'No participants found.' });
      return;
    }

    console.log('✅ Raffle started! Saving to Firebase...');
    await db.ref('raffleState').set({
      isRunning: true,
      entries: Object.values(entries),
      winners: [],
    });

    res.status(200).json({ message: 'Raffle started!' });
    console.log('🎉 Raffle process completed successfully.');
  } catch (error) {
    console.error('🚨 Error starting raffle:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

/**
 * Cloud Function: Draw Winner Every 30 Seconds
 */
export const drawWinner = onSchedule('every 30 seconds', async () => {
  const raffleRef = db.ref('raffleState');
  const raffleSnapshot = await raffleRef.once('value');
  const raffle = raffleSnapshot.val();

  if (!raffle || !raffle.isRunning || raffle.entries.length === 0) {
    console.log('No active raffle or no more entries.');
    return;
  }

  // Pick a random winner
  const winnerIndex = Math.floor(Math.random() * raffle.entries.length);
  const winner = raffle.entries.splice(winnerIndex, 1)[0];

  // Update Firebase
  await raffleRef.update({
    entries: raffle.entries,
    winners: [...raffle.winners, winner],
  });

  console.log(`🎉 Winner selected: ${winner.name} (${winner.email})`);

  // Stop the raffle when all entries are used
  if (raffle.entries.length === 0) {
    await raffleRef.update({ isRunning: false });
    console.log('Raffle complete.');
  }
});
