// eslint-disable-next-line simple-import-sort/imports
import { db } from './firebaseConfig';
import { ref, get } from 'firebase/database';

/**
 * Fetches all raffle entries from Firebase (GET request equivalent)
 */
export const getRaffleEntries = async () => {
  const entriesRef = ref(db, 'raffleEntries');
  const snapshot = await get(entriesRef);

  if (!snapshot.exists()) {
    console.log('No raffle entries found.');
    return [];
  }

  const entries = snapshot.val();
  // console.log('Raffle Entries:', entries);

  return Object.entries(entries).map(([email, data]) => ({
    email,
    ...(data as { name: string; timestamp: number }),
  }));
};
