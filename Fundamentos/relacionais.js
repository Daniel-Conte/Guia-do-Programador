console.log("1)", '1' == 1)             //leva em consideracao só o valor
console.log('2)', '1' === 1)            //"estritamente igual" leva em consideracao o tipo e o valor        USE ESTRITAMENTE IGUAL
console.log('3)', '3' != 3)             //leva em consideracao so o valor
console.log('4)', '3' !== 3)            //"estritamente diferente" leva em consideracao o tipo e o valor

const d1 = new Date(0)                  //pega a data. Nesse caso a hora 0 (01/01/1970)
const d2 = new Date(0)
console.log('5)', d1 === d2)            //comparando variaveis de referencia, tanto o "===" quanto o "==" comparam a endereco de memoria
console.log('6)', d1 == d2)
console.log('7)', d1.getTime() === d2.getTime())    //compara o horario da Date

console.log('8)', undefined == null)
console.log('9)', undefined === null)