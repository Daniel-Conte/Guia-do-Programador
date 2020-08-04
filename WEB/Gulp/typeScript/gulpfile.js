const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript') // Compilador
const tsProject = ts.createProject('tsconfig.json') // Aplica a config para compilar

function transformacaoTS() {
    return tsProject.src() // O dir dos arquivos ja está no "tsconfig.json"
    .pipe(tsProject()) // Executa a compilacao
    .pipe(gulp.dest('build'))
}