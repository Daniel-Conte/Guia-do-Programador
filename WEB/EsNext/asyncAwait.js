//Pegando parte do codigo de "usandoPromise.js"
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

// Rescurso do ES8
// Objetivo de simplificar o uso de promises
// Transforma um código assíncrono em algo que parece síncrono

let obterAlunos = async () => { //"async" torna a funcão assíncrona e retorna uma Promise
    const turmaA = await getTurma('A') //"await" só pode ser usado dentro de funcoes assíncronas
    const turmaB = await getTurma('B') //"await" pausa a execução da funcao assíncrona até o retorno da Promise. A funcao só vai pro próximo passo se ela for resolvida (forma síncrona)
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
} // Retorna um objeto AsyncFunction/Promise

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome)) //Pega o "return" da funcao "obterAlunos"
    .then(nome => console.log(nome))