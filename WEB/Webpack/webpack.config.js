const webpack = require('webpack')

module.exports = { // Toda a configuracao precisa estar dentro da exportacao
    mode: 'development', // Seta o modo de como vai ser tratado os arquivos gerados
        // 'development' -> Maior facilidade no momento de desenvolvimento do projeto. Tem source maps, mais facil de debugar, não é minificado...
        // 'production' -> Deixa o código pronto(estado final) para ir pro servidor. Faz o processo de minificacao, compilaçao...
    entry: './src/principal.js', // Define o arquivo de entrada para o WP(webpack) iniciar o empacotamento. Nesse arquivo precisa estar as importações de outros arquivos e dependencias
    output: { // Configura o output dos arquivos gerados
        filename: 'principal.js', // Seta o nome do arquivo que vai ser gerado
        path: __dirname + '/public' // Seta o diretorio(junto com o nome da pasta) onde todos os arquivos gerados vão ficar. "__dirname" retorna o diretorio raiz de onde fica este arquivo
    }
}