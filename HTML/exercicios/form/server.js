const express = require('express')
const app = express()
//const bodyParser = require('body-parser') O express já faz o bodyParser a partir da V4.0

app.use(express.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário incluido!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {  //":id" é definido como parametro
    console.log(req.params.id)  //e mostra aqui
    resp.send('<h1>Parabéns. Usuário Alterado!</h1>')
})

app.listen(3003)