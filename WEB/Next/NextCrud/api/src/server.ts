import express from 'express';
import cors from 'cors';
import pool from './db';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    res.send('Funciona');
  } catch (err) {
    console.error(err);
  }
});

app.listen(3001);
