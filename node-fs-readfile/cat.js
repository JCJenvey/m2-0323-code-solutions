import { readFile } from 'node:fs/promises';

async function readCat() {
  try {
    const args = process.argv.slice(2);
    const textFiles = await args.map(file => readFile('./' + file, { encoding: 'utf-8' }));
    const output = await Promise.all(textFiles);
    for (let i = 0; i < output.length; i++) {
      console.log(output[i]);
    }
  } catch (err) {
    console.error(err);
  }
}

await readCat();
