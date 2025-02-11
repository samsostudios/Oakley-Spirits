import { getRaffleEntries } from './getEntries';
import { postRaffleEntry } from './postEntries';

// Test adding an entry
(async () => {
  await postRaffleEntry('Richwoods72@gmail.com', 'Marcus  Woods');
  await postRaffleEntry('tim6oslice@gmail.com', 'Tim Hudson');
  await postRaffleEntry('cwmart7@gmail.com', 'Cody Martin');
  await postRaffleEntry('Troy.sheldon@outlook.com', 'Troy Davis');
  await postRaffleEntry('wdbrow03@gmail.com', 'Welsey Brown');
  await postRaffleEntry('Ed@eccindustries.com', 'Ed Salameh');
  await postRaffleEntry('dawightboy2@yahoo.com', 'Dwight Young');
  await postRaffleEntry('Neal.donhoff@gmail.com', 'Neal Donhoff');

  // Test fetching all entries
  const entries = await getRaffleEntries();
  console.log(entries);
})();
