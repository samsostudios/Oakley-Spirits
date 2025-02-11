// eslint-disable-next-line simple-import-sort/imports
import { db } from './firebaseConfig';
import { ref, set, get, push } from 'firebase/database';

/**
 * Adds a new raffle entry to Firebase (POST request equivalent)
 * Generates a unique ID to avoid conflicts
 * @param email - The participant's email
 * @param name - The participant's name
 */
export const postRaffleEntry = async (email: string, name: string) => {
  const entriesRef = ref(db, 'raffleEntries');

  // Check if the email is already registered
  const snapshot = await get(entriesRef);
  if (snapshot.exists()) {
    const existingEntries = snapshot.val();
    for (const entryId in existingEntries) {
      if (existingEntries[entryId].email === email) {
        console.log(`Email ${email} is already registered.`);
        return;
      }
    }
  }

  // Push a new entry with a unique ID
  const newEntryRef = push(entriesRef);
  await set(newEntryRef, {
    name,
    email,
    timestamp: Date.now(),
  });

  console.log(`Successfully added ${name} (${email}) to the raffle.`);
};
