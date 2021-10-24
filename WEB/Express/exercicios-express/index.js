const express = require('express');
const app = express();
// Para iniciar uma aplicação express, deve-se importar o módulo e executá-lo

// "app.use(<endpoint>, <callback>)" É um middleware que é executado sempre que uma requisição é enviada para o servidor
// Trata qualquer tipo de requisição(GET, POST, PUT...)
// Se não tiver um endpoint, todas as requisições passarão por esse middleware
app.use((req, res) => {
  //res.send('<b>Bueno<b/>');
  // "res.send(<resposta>)" envia uma response para quem fez a requisição
  // O send interpreta HTML

  //res.json({ name: 'iPad 32Gb', price: 1899.0, discount: 0.12 });
  // "res.json(<resposta>)" envia uma response em formato JSON
  // Já converte o conteúdo para JSON
  // O tipo da resposta é "application/json; charset=utf-8"

  res.json({
    data: [
      { id: 7, name: 'Ana', position: 1 },
      { id: 34, name: 'Bia', position: 2 },
      { id: 73, name: 'Carlos', position: 3 },
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200,
  });
});

// Quando usa um endpoint, o middleware será executado somente se a url iniciar com o endpoint especificado
// Não precisa ser exatamente igual, basta iniciar com ele
// Ex1: "localhost:3000" Não funciona
// Ex2: "localhost:3000/teste" Não funciona
// Ex3: "localhost:3000/opa" Funciona
// Ex4: "localhost:3000/opa/teste" Funciona
/* app.use('/opa', (req, res) => {
  res.send('<b>Opa<b/>');
}); */

// Para especificar o uso do endpoint por um tipo de requisição específica, é usado um método para cada tipo

// "app.get" só vai tratar as requisições GET com endpoint "/opa"
app.get('/opa', (req, res) => {
  res.send('GET opa');
});

// "app.post" só vai tratar as requisições POST com endpoint "/opa"
app.post('/opa', (req, res) => {
  res.send('POST opa');
});

// "app.all" trata todos os tipos de requisição
app.all('/opa', (req, res) => {
  res.send('ALL opa');
});

app.listen(3000, () => {
  console.log('Backend iniciado...');
});
// listen(<porta>, <callback>)
// deixa o servidor escutando a porta 3000 para requisições
