const modoDev = process.env.NODE_ENV !== 'production' // Pega a variavel declarada no script "build" no package.json pela dependencia "cross-env"
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// Loaders não precisam ser chamados(require)

module.exports = { // Toda a configuracao precisa estar dentro da exportacao
    mode: modoDev ? 'development' : 'production', // Seta o modo de como vai ser tratado os arquivos gerados
        // 'development' -> Maior facilidade no momento de desenvolvimento do projeto. Tem source maps, mais facil de debugar, não é minificado...
        // 'production' -> Deixa o código pronto(estado final) para ir pro servidor. Faz o processo de minificacao, compilaçao...
    entry: './src/principal.js', // Define o arquivo de entrada para o WP(webpack) iniciar o empacotamento. Nesse arquivo precisa estar as importações de outros arquivos e dependencias
    output: { // Configura o output dos arquivos gerados
        filename: 'principal.js', // Seta o nome do arquivo que vai ser gerado
        path: __dirname + '/public' // Seta o diretorio(junto com o nome da pasta) onde todos os arquivos gerados vão ficar. "__dirname" retorna o diretorio raiz de onde fica este arquivo
    },
    optimization: { // Onde ficam todas as otimizações
        minimizer: [ // Ativa só quando o modo for "production"
            new OptimizeCSSAssetsPlugin({}) // Otimiza o CSS
        ]
    },
    plugins: [ // Todos os plugins ficam aqui
        new MiniCssExtractPlugin({ // É usado para gerar um novo arquivo só com o Css
            filename: "estilo.css" // Nome do arquivo que vai ser gerado
        }),
        new TerserPlugin({ // Otimiza o JS
            parallel: true, // Faz a otimizacao mais rapido
            terserOptions: {
                ecma: 6
            }
        })
    ],
    module: { // Webpack só interpreta JS e JSON. Para interpretar outros formatos precisa usar "loaders"
        rules: [{ // Todos os loaders ficam dentro de "rules"
            test: /\.s?[ac]ss$/, // Expressão regular. "test" identifica que arquivo ou arquivos que devem ser transformados
            use: [ // "use" indica qual/quais loaders devem ser usados para fazer a transformacao
                MiniCssExtractPlugin.loader, // Carrega o loader dele pra fazer a transformacao nos arquivos referenciados. !!! Conflita com o loader "style-loader" !!!
                //'style-loader', // Add o css na DOM(dentro do JS) injetando a tag <style>
                'css-loader', // interpreta @import url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]        
    }
}