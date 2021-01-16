const gulp = require('gulp')
const { watch } = require('gulp') // Monitora as modificacoes nos arquivos
const webserver = require('gulp-webserver') // Executa um servidor

function servidor() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true, // Abre o navegador
            livereload: true
        }))
}

function monitorarArquivos(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')()) // Toda vez que um arquivo nesse diretorio sofrer uma modificacao a funcao é executada
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}