//Forma para pegar arquivos numa url usando callbacks (sem promise)
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => { //pega os dados da url
        let resultado = ''

        res.on('data', dados => { //Pega os dados da response. Sinaliza cada vez que recebe dados
            resultado += dados //Concatena eles aqui. Os dados não vem inteiros, então precisa concatenar
        })

        res.on('end', () => { //Sinaliza o fim do recebimento de dados
            callback(JSON.parse(resultado)) //Passa o resultado(convertido para objeto) para a callback
        })
    })
}

let nomes = []
getTurma('A', alunos => { //O parametro "alunos" vai receber os dados de "resultado"
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)) //".map()" retorna um array e concatena com o array "nomes"
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})