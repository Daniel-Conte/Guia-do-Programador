const express = require('express');
const app = express();
// Para iniciar uma aplicação express, deve-se importar o módulo e executá-lo

app.listen(3000, () => {
  console.log('Backend iniciado...');
});
// listen(<porta>, <callback>)
// deixa o servidor escutando a porta 3000 para requisições
