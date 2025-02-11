// eslint-disable-next-line simple-import-sort/imports
import { db } from '../utils/firebase/firebaseConfig';
import { ref, onValue } from 'firebase/database';

// Define the structure of a winner
interface Winner {
  name: string;
  email: string;
}

// Function to listen for new winners
export const listenForWinners = () => {
  const winnersRef = ref(db, 'raffleState/winners');

  onValue(winnersRef, (snapshot) => {
    if (snapshot.exists()) {
      const winners: Winner[] = Object.values(snapshot.val());
      console.log('🎉 Updated Winners:', winners);
      updateWinnerUI(winners);
    } else {
      console.log('No winners yet.');
    }
  });
};

// Function to update the UI with winners
const updateWinnerUI = (winners: Winner[]) => {
  const winnersContainer = document.getElementById('winners-list');
  if (!winnersContainer) return;

  winnersContainer.innerHTML = ''; // Clear previous entries
  winners.forEach((winner) => {
    const winnerElement = document.createElement('div');
    winnerElement.className = 'winner-entry';
    winnerElement.innerHTML = `<strong>${winner.name}</strong> (${winner.email})`;
    winnersContainer.appendChild(winnerElement);
  });
};

// Start listening when the page loads
document.addEventListener('DOMContentLoaded', listenForWinners);
