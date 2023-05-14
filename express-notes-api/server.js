import express from 'express';
import { readFile } from 'node:fs/promises';

const app = express();

const notesData = JSON.parse(await readFile('./data.json', { encoding: 'utf8' }));
// let nextID = notesData.nextId;
const notes = notesData.notes;

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const note in notes) {
    notesArr.push(notes[note]);
  }
  res.json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  if (parseInt(req.params.id) < 1 || !parseInt(req.params.id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (notes[req.params.id]) {
    res.json(notes[req.params.id]);
  } else {
    res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
