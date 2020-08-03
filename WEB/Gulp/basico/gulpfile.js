const gulp = require('gulp')
const { series, parallel } = require('gulp') // "series" é usado para executar uma tarefa depois de outra(executa em serie). "parallel" é usado para executar determinadas tarefas ao mesmo tempo(executa em paralelo)
//const series = gulp.series //Outra forma de criar "series"

antes1 = cb => { //Criando uma tarefa. Sempre passar "cb"(callback) como parametro(o gulp utiliza esse parametro internamente)
    console.log('Tarefa Antes 1!')
    return cb() //Sempre retorne a cb e chame ela
}

antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}

function copiar(cb) {
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) //".src()" Pega arquivos. Se for mais que 1 arquivo coloque dentro de um array
    gulp.src('pastaA/**/*.txt')
        //.pipe(imagemPelaMetade()) // ".pipe()" executa alguma transformação nos arquivos do src
        //.pipe(imagemEmPretoEBranco())
        //.pipe(transformacaoA())
        //.pipe(transformacaoB())
        //.pipe(transformacaoC())
        .pipe(gulp.dest('pastaB')) // ".dest()" é a pasta de destino para gravar/enviar os arquivos. Se a pasta não existir ela é criada
    return cb()
}

fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}
module.exports.default = series(
    parallel(antes1, antes2), // Executa ao mesmo tempo
    copiar,
    fim
    ) //Sempre exporte dentro de "default"(é uma funcao interna que todas as tarefas precisam executar aqui dentro). Pode passar quantas tarefas quiser dentro de 'series' ou 'parallel'