import express from 'express';
import cors from 'cors';
import pool from './db';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/cliente/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM cliente WHERE codigo = $1', [id]);

    res.status(200).json({ data: result.rows[0] });
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.get('/cliente', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cliente');

    res.status(200).json({ data: result.rows });
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.post('/cliente', async (req, res) => {
  try {
    const { nome, idade } = req.body;
    if (!nome) throw 'Nome é obrigatório';
    if (!idade) throw 'Idade é obrigatório';

    const result = await pool.query('INSERT INTO cliente(nome, idade) VALUES($1, $2) RETURNING *', [
      nome,
      idade,
    ]);

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.put('/cliente/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, idade } = req.body;

    if (!nome) throw 'Nome é obrigatório';
    if (!idade) throw 'Idade é obrigatório';

    const result = await pool.query(
      `
      UPDATE cliente 
      SET nome = $1,
      idade = $2
      WHERE codigo = $3
      RETURNING *
      `,
      [nome, idade, id]
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.delete('/cliente/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM cliente WHERE codigo = $1', [id]);

    res.status(200).json('Cliente excluído com sucesso');
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.listen(3001);
