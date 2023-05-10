import express from 'express';

const app = express();

app.use((req, res) => {
  console.log(req.method);
  res.send('A different string');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
