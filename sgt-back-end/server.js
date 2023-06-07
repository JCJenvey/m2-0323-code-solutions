import express from 'express';
import pg from 'pg';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.get('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
      return;
    }
    const sql = `
      select *
        from "grades"
       where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.json(grade);
    } else {
      res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
      return;
    }
    const sql = `
      delete
        from "grades"
        where "gradeId" = $1
        returning *
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.use('/', express.json());

app.post('/api/grades', async (req, res) => {
  try {
    if (!req.body.name || req.body.name === '') {
      res.status(400).json({ error: '"name" is a required field' });
    } else if (!req.body.course || req.body.course === '') {
      res.status(400).json({ error: '"course" is a required field' });
    } else if (!req.body.score || req.body.score === '') {
      res.status(400).json({ error: '"score" is a required field' });
    } else if (req.body.score > 100 || req.body.score < 0) {
      res.status(400).json({ error: '"score" must be from 0 to 100' });
    } else {
      const sql = `
        insert into "grades" ("name", "course", "score")
        values ($1, $2, $3)
        returning *
      `;
      const values = [req.body.name, req.body.course, req.body.score];
      const result = await db.query(sql, values);
      res.status(201).json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
    } else if (!req.body.name || req.body.name === '') {
      res.status(400).json({ error: '"name" is a required field' });
    } else if (!req.body.course || req.body.course === '') {
      res.status(400).json({ error: '"course" is a required field' });
    } else if (!req.body.score || req.body.score === '') {
      res.status(400).json({ error: '"score" is a required field' });
    } else if (req.body.score > 100 || req.body.score < 0) {
      res.status(400).json({ error: '"score" must be from 0 to 100' });
    } else {
      const sql = `
        update "grades"
           set "name" = $2,
               "course" = $3,
               "score" = $4
         where "gradeId" = $1
        returning *
      `;
      const params = [gradeId, req.body.name, req.body.course, req.body.score];
      const result = await db.query(sql, params);
      const update = result.rows[0];
      if (update) {
        res.json(update);
      } else {
        res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
