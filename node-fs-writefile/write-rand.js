import { writeFile } from 'node:fs/promises';

async function writeRandom() {
  try {
    const num = Math.random();
    await writeFile('random.txt', num + '\n');
  } catch (err) {
    console.error(err);
  }
}

await writeRandom();
