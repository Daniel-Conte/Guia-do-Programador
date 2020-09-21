const fs = require('fs')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, (err, conteudo) => {

            resolve(conteudo.toString())
        })
    })
}

const caminho = __dirname + '/dados.txt'

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\r\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O conteúdo final é: ${conteudo}`)
    .then(console.log)