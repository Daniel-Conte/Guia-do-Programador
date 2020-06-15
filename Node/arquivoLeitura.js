const fs = require('fs') //"File System", já vem no core do node

const caminho = __dirname + '/arquivo.json' //"__dirname" é uma variavel que contém o diretório atual. Nesse caso "d:\Programação\MeusProjetos\Exercicios-WEB\Node"

//sincrono... Essa forma lê todo o arquivo antes de atender a próxima requisição (não é recomendado para arquivos grandes, fazer IO, leitura e requisicao no BD)
const conteudo = fs.readFileSync(caminho, 'utf-8') //Lê o arquivo de forma sincrona
console.log(conteudo)

//assincrono... Essa forma manda uma worker thread ler o arquivo enquanto a thread principal pode atender outras requisições. A execução acontece em paralelo com a execução do programa em si
fs.readFile(caminho, 'utf-8', (err, conteudo) => { //callback para tratar o arquivo lido. Primeiro param é um erro e o segundo é o conteudo em si
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//Como o arquivo que queremos ler está no formato JSON, existe uma forma mais facil de ler
const config = require('./arquivo.json') //Se a extensão for diferente de ".js" precisa colocar. Já converte JSON para Objeto
console.log(config.db) //Esse console.log vai aparecer antes do console.log acima("readFile"), pois este aqui é sincrono e o outro é assincrono(só vai executar quando o arquivo estiver carregado)

fs.readdir(__dirname, (err, arquivos) => { //"readdir" le o diretorio e mostra os arquivos nele. "dir" = DIRetorio
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})