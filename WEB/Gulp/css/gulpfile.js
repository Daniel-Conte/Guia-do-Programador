const { series, parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass') // Converte SCSS para CSS
const uglifyCss = require('gulp-uglifycss') // Minifica arquivos CSS
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifyCss({
            "uglyComments": true // Retira comentarios
        }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCSS, copiarHTML)