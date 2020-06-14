const contadorA = require('./instanciaUnica') //As 2 const usam a mesma instancia
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() //Como é uma factory cada const tem sua instancia
const contadorD = require('./instanciaNova')() //"()" já invoca a funcao

contadorA.inc() //Invoca a funcao "inc" dentro da instancia
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) //Os 2 compartilham o mesmo resultado

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) //Cada funcao é uma instancia diferente, entao não compartilham os valores