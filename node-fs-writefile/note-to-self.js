import { writeFile } from 'node:fs/promises';

async function writeNote() {
  try {
    const note = process.argv[2];
    await writeFile('note.txt', note + '\n');
  } catch (err) {
    console.error(err);
  }
}

await writeNote();
