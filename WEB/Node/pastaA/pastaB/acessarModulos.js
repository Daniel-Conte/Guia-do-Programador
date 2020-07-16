const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao') //não precisa sair das pastas pois o node procura o nome do modulo dentro de "node_modules" e importa o arquivo index dentro dessa pasta
console.log(saudacao.ola)

const c = require('./pastaC') // A busca padrao é o "index", entao se na pasta tiver o arquivo "index" não precisa por o nome do arquivo.
console.log(c.ola2)

/* const http = require('http') //"http" é um modulo interno do node (core)
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) */