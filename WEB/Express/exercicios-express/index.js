const express = require('express');
const saudacao = require('./saudacaoMid');
const app = express();
// Para iniciar uma aplicação express, deve-se importar o módulo e executá-lo

// "app.use(<endpoint>, <callback>)" É um middleware que é executado sempre que uma requisição é enviada para o servidor(dependendo de como está organizada a cadeia de middlewares)
// Trata qualquer tipo de requisição(GET, POST, PUT...)
// Se não tiver um endpoint, todas as requisições passarão por esse middleware
// Geralmente é utilizado pra fazer um tratamento básico nas requisições e joga ela pro próximo middleware
app.use((req, res, next) => {
  // O terceiro parâmetro da callback é uma função que ao ser executada dá continuidade à cadeira de middlewares, executando o próximo da cadeia
  // É parecido com o encadeamento de ".then()" nas Promises
  // !!! A ordem da cadeia de middlewares é determinada pela ordem de escrita no código !!!
  console.log('Antes...');
  next();
  // Executa o próximo middleware
  // Se não executar a função "next", a cadeia para
});

// Escutando o endpoint "/clientes/relatorio" através do método GET
// !!!!!! Quanto mais específico é o endpoint, mais "pra cima" ele deve ficar !!!!!!
// Se colocar esse middleware abaixo do middleware logo abaixo "/clientes/:id", este irá ser chamado pois é mais genérico
app.get('/clientes/relatorio', (req, res) => {
  // Lendos dados da requisição através da query: "/clientes/relatorio?completo=true&ano=2020"
  res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`);
});

// Escutando o endpoint "/clientes" através do método GET
// ":<param>" cria um parâmetro na url da requisição, é colocado um valor direto
app.get('/clientes/:id', (req, res) => {
  // ":id" irá receber um valor na hora da requisição
  // Ex: "/clientes/2"

  // Para acessar os parâmetros, utilize o atributo "params" da requisição
  res.send(`Cliente ${req.params.id} selecionado!`);
});

// Escutando o endpoint "/corpo" através do método POST
app.post('/corpo', (req, res) => {
  let corpo = '';

  // Para ler os dados do corpo da requisição é preciso montar todos os pedaços do corpo, pois acontece um "streaming de dados" (assíncrono)
  req.on('data', parte => {
    corpo += parte;
  });

  // Executa quando os dados param de chegar
  req.on('end', () => {
    res.send(corpo);
  });
});

// Passando uma função externa os parametros do middleware irao para a função (se não disparar a função)
// Se disparar a função, esta deve retornar um middleware que irá receber os parametros da requisição (req, res, next)
// Assim é possível passar parâmetros personalizados para usar no tratamento da requisição
app.use(saudacao('Guilherme'));

app.use((req, res, next) => {
  console.log('Durante...');
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

  next();
});

app.use((req, res) => {
  console.log('Depois...');
  // Por não estar dando continuidade ("next()"), a cadeia para aqui e não chama as funções abaixo (mesmo se o endpoint estiver certo)
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
