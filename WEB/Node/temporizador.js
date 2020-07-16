const schedule = require('node-schedule')

//Executa uma tarefa numa determinada rotina
const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 5', function() { //(segundos, minutos, horas, dia do mes, mes, dia da semana). "*/" a cada tanto tempo (nesse caso, a cada 5 seg). "*" qualquer (qualquer minuto, dia, etc). 'Numero isolado' vai executar só nesse periodo de tempo
//O dia da semana começa no domingo(0)
    console.log('Executando Tarefa 1!', new Date().getSeconds()) //Mostra o log e os segundos em que a tarefa executou
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000) //Cancela a tarefa1 depois de 20 segundos

//setImmediate
//setInterval

const regra = new schedule.RecurrenceRule() //Uma forma de guardar as regras dentro de um objeto
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 15
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})