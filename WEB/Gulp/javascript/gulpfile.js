const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    return gulp.src('src/**/*.js') // Dá pra retornar todo o código e dispensar o retorno "cb()"
        .pipe(babel({ // Possui muitas opcoes para formatar e transformar o arquivo/texto
            comments: false, // Retira todos os comentarios
            presets: ["env"] // Pega a versao mais moderna do JS e converte o codigo para a versão mais compativel com os browsers
        }))
        .pipe(uglify()) // Minifica o código
        .on('error', err => console.log(err)) // Caso aconteça determinada coisa, dispara a funcao
        .pipe(concat('codigo.min.js')) // Concatena todos os arquivos em 1 só e define um nome para o novo arquivo
        .pipe(gulp.dest('build'))
}

function fim(cb) {
    console.log('Fim!!!') // Com "console.log" não funciona o retorno
    return cb()
}

exports.default = series(transformacaoJS, fim)