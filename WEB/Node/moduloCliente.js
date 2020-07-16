//Agora importando atributos que sao publicos nos outros modulos
const moduloA = require('./moduloA')  //Importa os atributos publicos que estao no arquivo "moduloA" e atribui à "const moduloA"
const moduloB = require('./moduloB')  //"./" significa que o arquivo desejado está na mesma pasta de onde voce o está chamando

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)