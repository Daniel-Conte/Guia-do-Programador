let a = 3

global.b = 123      //cria uma variavel no node global. NAO USE

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)   //"this" é IGUAL a "module.exports"
console.log(module.exports === this)
//console.log(this)
console.log(module.exports)     //mostra as variaveis de "this" ou "module.exports" dentro de um objeto

//module.exports = { f: 456, g: false, h: 'teste' }         //mais usado ao inves de "this.c = 456   this.d = false ..."
