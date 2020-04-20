console.log("a =",a)
var a = 2                       //"var" é detectada mesmo sendo solicitada antes da propria declaracao, mas o valor atribuido nao é utilizado (é declarado como "undefined")
console.log("a =",a)

console.log("b =",b)
let b = 2                       //"let" não tem essa caracteristica de hoisting
console.log("b =",b)
