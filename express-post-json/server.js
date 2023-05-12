import express from 'express';

const app = express();

let nextID = 1;
const grades = {};

app.use('/', express.json());

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const grade in grades) {
    gradesArr.push(grades[grade]);
  }
  res.json(gradesArr);
});

app.post('/api/grades', (req, res) => {
  req.body.id = nextID;
  grades[nextID] = req.body;
  nextID++;
  res.status(201).json(req.body);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
