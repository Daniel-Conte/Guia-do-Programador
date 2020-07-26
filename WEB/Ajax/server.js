const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //Executa em qualquer requisicao(use). Vai servir os arquivos estaticos pra quem fez a chamada. '.' vai servir todos os arquivos estaticos da pasta onde fica este arquivo
app.use(bodyParser.urlencoded({ extended: true })) //Se vier uma requisicao com um submit de formulario, vai transformar em objeto
app.use(bodyParser.json()) //Se vier um JSON na requisicao, vai transformar em objeto

app.get('/teste', (req, res) => res.send('Ok')) //Quando receber uma requisicao do tipo "get" com a url "/teste" vai enviar de volta "Ok"
app.listen(8080, () => console.log('Executando...'))