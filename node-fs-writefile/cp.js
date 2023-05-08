import { readFile, writeFile } from 'node:fs/promises';

async function copyFile() {
  try {
    const fileToCopy = process.argv[2];
    const newFile = process.argv[3];
    const fileContents = await readFile('./' + fileToCopy, { encoding: 'utf-8' });
    await writeFile(newFile, fileContents);
  } catch (err) {
    console.error(err);
  }
}

await copyFile();
