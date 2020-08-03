const gulp = require('gulp')
const { series } = require('gulp') // "series" é usado para executar uma tarefa depois de outra(executa em serie)
//const series = gulp.series //Outra forma de criar "series"

function copiar(cb) { //Criando uma tarefa. Sempre passar "cb"(callback) como parametro(o gulp utiliza esse parametro internamente)
    console.log('Tarefa de copiar!')
    return cb() //Sempre retorne a cb e chame ela
}

module.exports.default = series(copiar) //Sempre exporte dentro de "default"(é uma funcao interna que todas as tarefas precisam executar aqui dentro). Pode passar quantas tarefas quiser dentro de 'series'