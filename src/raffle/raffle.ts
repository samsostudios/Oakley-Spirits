// eslint-disable-next-line simple-import-sort/imports
import { db } from '../utils/firebase/firebaseConfig';
import { getRaffleEntries } from '../utils/firebase/getEntries';
import { ref, set } from 'firebase/database';

export class Raffle {
  private entries: { email: string; name: string }[] = [];
  private winners: { email: string; name: string }[] = [];
  private isRunning: boolean;
  private timer: any;

  constructor() {
    console.log('raffle created');
    this.isRunning = false;
    this.loadEntries();
  }

  /** Fetch all raffle entries from Firebase */
  private async loadEntries() {
    this.entries = await getRaffleEntries();
    console.log('Loaded entries:', this.entries);
  }

  /** Start the raffle process */
  public async startRaffle() {
    if (this.isRunning) {
      console.log('raffle is running...');
      return;
    }

    this.isRunning = true;
    console.log('raffle started!');

    if (this.entries.length === 0) {
      console.log('No entries found. Stopping raffle.');
      this.isRunning = false;
      return;
    }

    this.drawWinnerLoop();
  }

  /** Select a random winner from available entries */
  private drawWinner() {
    if (this.entries.length === 0) {
      console.log('No more entries left! Stopping raffle.');
      this.isRunning = false;
      return;
    }

    // Select a random winner
    const winnerIndex = Math.floor(Math.random() * this.entries.length);
    const winner = this.entries.splice(winnerIndex, 1)[0];
    this.winners.push(winner);

    console.log(`🎉 Winner selected: ${winner.name} (${winner.email})`);

    // // Push the updated winners list to Firebase
    // const winnersRef = ref(db, 'winners');
    // set(winnersRef, this.winners);
  }

  /** Runs the draw process every 30 seconds */
  private drawWinnerLoop() {
    this.timer = setInterval(() => {
      console.log('DRAWING WINNER....');
      this.drawWinner();

      // Stop loop if no more entries exist
      if (this.entries.length === 0) {
        clearInterval(this.timer);
        console.log('Raffle complete!');
      }
    }, 10000);
  }

  /** Stop the raffle manually */
  public stopRaffle() {}
}
