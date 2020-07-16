const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}
//"writeFile" cria um novo arquivo. writeFile("diretorio + nome e extensao do arquivo novo", "conteudo do novo arquivo", "callback")
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!') //Se "err" for true, vai imprimir o erro, se for false imprime "Arquivo salvo!"
})