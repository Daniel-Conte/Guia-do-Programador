import express from 'express';
const consign = require('consign'); // Só funciona com require e não tem @types

const app = express();
// Consign serve basicamente pra deixar o index mais "limpo", organizando as importações e middlewares
// Passando o "app" de parâmetro para a função com os middlewares sendo exportados no arquivo
// Todos arquivos que exportam uma função recebem o app de parametro, o consign carrega a função dentro do app
// Consign pega a pasta "api" que foi carregada e joga ela dentro do app, podendo ser acessada (app.api.user)
// Todos arquivos que forem carregados DEVEM exportar a função pelo module.exports (export default não funciona)
consign().then('./config/middlewares.ts').then('./api').then('./config/routes.ts').into(app);

app.listen(3000, () => {
  console.log('Server executando...');
});
