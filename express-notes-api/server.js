import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();

app.get('/api/notes', async (req, res) => {
  const notesData = JSON.parse(await readFile('./data.json', { encoding: 'utf8' }));
  const notes = notesData.notes;
  const notesArr = [];
  for (const note in notes) {
    notesArr.push(notes[note]);
  }
  res.json(notesArr);
});

app.get('/api/notes/:id', async (req, res) => {
  const notesData = JSON.parse(await readFile('./data.json', { encoding: 'utf8' }));
  const notes = notesData.notes;
  console.log(typeof req.params.id);
  if (Number.isInteger(parseInt(req.params.id)) || parseInt(req.params.id) < 1 || !parseInt(req.params.id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (notes[req.params.id]) {
    res.json(notes[req.params.id]);
  } else {
    res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  const notesData = JSON.parse(await readFile('./data.json', { encoding: 'utf8' }));
  const notes = notesData.notes;
  try {
    if (Number.isInteger(parseInt(req.params.id)) || parseInt(req.params.id) < 1 || !parseInt(req.params.id)) {
      res.status(400).json({ error: 'id must be a positive integer' });
    } else if (notes[req.params.id]) {
      delete notes[req.params.id];
      notesData.notes = notes;
      await writeFile('data.json', JSON.stringify(notesData));
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

app.use('/', express.json());

app.post('/api/notes', async (req, res) => {
  const notesData = JSON.parse(await readFile('./data.json', { encoding: 'utf8' }));
  const notes = notesData.notes;
  let nextId = notesData.nextId;
  try {
    if (!req.body.content) {
      res.status(400).json({ error: 'content is a required field' });
    } else {
      req.body.id = nextId;
      notes[nextId] = req.body;
      nextId++;
      notesData.nextId = nextId;
      notesData.notes = notes;
      await writeFile('data.json', JSON.stringify(notesData));
      res.status(201).json(req.body);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  const notesData = JSON.parse(await readFile('./data.json', { encoding: 'utf8' }));
  const notes = notesData.notes;
  try {
    if (Number.isInteger(parseInt(req.params.id)) || parseInt(req.params.id) < 1 || !parseInt(req.params.id)) {
      res.status(400).json({ error: 'id must be a positive integer' });
    } else if (!req.body.content) {
      res.status(400).json({ error: 'content is a required field' });
    } else if (notes[req.params.id]) {
      req.body.id = req.params.id;
      notes[req.params.id] = req.body;
      notesData.notes = notes;
      await writeFile('data.json', JSON.stringify(notesData));
      res.json(notes[req.params.id]);
    } else {
      res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
