import express from 'express';
const consign = require('consign'); // Só funciona com require e não tem @types
import db from './config/db';
import mongoose from 'mongoose';
import './config/mongodb';

import type { ExpressConsign } from './types';

const app = express() as ExpressConsign;

// Permite acessar as funções do knex para manipular o banco de dentro do app
app.db = db;
app.mongoose = mongoose;

// Consign serve basicamente pra deixar o index mais "limpo", organizando as importações e middlewares
// Passando o "app" de parâmetro para a função com os middlewares sendo exportados no arquivo
// Todos arquivos que exportam uma função recebem o app de parametro, o consign carrega a função dentro do app
// Consign pega a pasta "api" que foi carregada e joga ela dentro do app, podendo ser acessada (app.api.user)
// Todos arquivos que forem carregados DEVEM exportar a função pelo module.exports (export default não funciona)
consign()
  .include('./config/passport.ts')
  .then('./config/middlewares.ts')
  .then('./api/validation.ts')
  .then('./api/auth.ts')
  .then('./api/user.ts')
  .then('./api/category.ts')
  .then('./api/article.ts')
  .then('./api/stat.ts')
  .then('./schedule/statsSchedule.ts')
  .then('./config/routes.ts')
  .into(app);

app.listen(3000, () => {
  console.log('Server executando...');
});
