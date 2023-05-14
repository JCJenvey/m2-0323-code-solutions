import express from 'express';
import { readFile } from 'node:fs/promises';

const app = express();

const notesData = JSON.parse(await readFile('./data.json', { encoding: 'utf8' }));
// const nextID = notesData.nextId;
const notes = notesData.notes;

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const note in notes) {
    notesArr.push(notes[note]);
  }
  res.json(notesArr);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
