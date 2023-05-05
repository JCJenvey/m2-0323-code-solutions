import { readFile } from 'node:fs/promises';

async function readAny() {
  try {
    const textFile = await readFile('./' + process.argv[2], { encoding: 'utf-8' });
    console.log(textFile);
  } catch (err) {
    console.error(err);
  }
}

await readAny();
