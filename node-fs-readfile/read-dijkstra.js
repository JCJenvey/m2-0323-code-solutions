import { readFile } from 'node:fs/promises';

async function readDijkstra() {
  try {
    const dijkstra = await readFile('./dijkstra.txt', { encoding: 'utf-8' });
    console.log(dijkstra);
  } catch (err) {
    console.error(err);
  }
}

await readDijkstra();
