//Versão do "usandoCallback.js" usando Promise
const http = require('http')
const { callbackify } = require("util")

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado)) //Se houver algum erro nessa linha de código, o erro vai ser jogado pro "catch"
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

/* let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
}) */

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) //Executa todos e só depois executa os ".then()"
    //Vai retornar uma matriz com cada turma dentro de um array.
    .then(turmas => [].concat(...turmas)) //Usando "Spread" para espalhar a matriz, ficando somente os 3 arrays separados. E por fim adicionando tudo em 1 array
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message)) //Printa só a mensagem principal do erro e não ele todo