import express from 'express';
const consign = require('consign'); // Só funciona com require e não tem @types

const app = express();
// Consign serve basicamente pra deixar o index mais "limpo", organizando as importações e middlewares
// Passando o "app" de parâmetro para a função com os middlewares sendo exportada no arquivo
consign().then('./config/middlewares.ts').into(app);

app.listen(3000, () => {
  console.log('Server executando...');
});
