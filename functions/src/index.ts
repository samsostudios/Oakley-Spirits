import * as admin from 'firebase-admin';
import { onRequest } from 'firebase-functions/v2/https';

admin.initializeApp();
const db = admin.database();

/**
 * 🚀 Start the Raffle (Manually Triggered)
 */
export const startRaffle = onRequest(async (req, res) => {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ message: 'Method Not Allowed' });
      return;
    }

    console.log('🔥 Raffle started!');

    // Fetch participants from Firebase
    const snapshot = await db.ref('raffleEntries').once('value');
    const entries = snapshot.val();

    if (!entries || Object.keys(entries).length === 0) {
      res.status(400).json({ message: 'No participants found.' });
      return;
    }

    // Convert participants into an array
    const participants = Object.values(entries);

    // Clear old winners & start fresh
    await db.ref('raffleState').set({
      isRunning: true,
      entries: participants,
      winners: [],
      startTime: Date.now(),
    });

    console.log('✅ Raffle initialized successfully!');

    res.status(200).json({
      message: 'Raffle started!',
      totalEntries: participants.length,
    });
  } catch (error) {
    console.error('🚨 Error in startRaffle:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
