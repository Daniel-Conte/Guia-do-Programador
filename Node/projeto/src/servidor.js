const porta = 3003 //porta é um "local" em que tal processo está sendo executado dentro da máquina. IP é o endereço da máquina e PORTA é o endereço do processo dentro da máquina

const express = require('express')
const app = express()
const bodyParser = require('body-parser') //Serve para transformar o corpo da request em objeto
const bancoDeDados = require('./bancoDeDados')

/*app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next() //Os middlewares executam em ordem de codigo, o de cima chama o de baixo
})*/

app.use(bodyParser.urlencoded({ extended: true })) //"extended: true" serve para não dar um certo erro. TEM QUE USAR SEMPRE
//"use" executa o codigo independentemente de qual url for chamada

app.get('/produtos', (req, res, next) => { //"get" pega coisas do BD
    res.send(bancoDeDados.getProdutos()) //Manda todos os produtos
    //"RESponse".send envia uma resposta para quem enviou a request. Já converte para JSON.
})

app.get('/produtos/:id', (req, res, next) => { //":id" é um parametro na url. Ex: "/produtos/2" o "2" é um parametro
    res.send(bancoDeDados.getProduto(req.params.id)) //Pega o produto com o id passado na url. O parametro é um atributo dentro da request (req.params.id)
})

app.post('/produtos', (req, res, next) => { //"post" manda coisas pro BD
    const produto = bancoDeDados.salvarProduto({ //Salva um produto
        nome: req.body.nome, //Pega os dados no corpo da request (req.body."esse nome é setado na parte do front")
        preco: req.body.preco //PRECISA da dependencia "body-parser"
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => { //"put" vai sobrescrever um produto específico no BD. Altera
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        id: req.params.id
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => { //"delete" exclui um produto específico no BD
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})