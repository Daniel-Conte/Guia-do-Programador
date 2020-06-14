console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2       //Todas apontam para o mesmo objeto, se ele ja foi criado.
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'   //Se quiser exportar outro objeto, o "this" e o "exports" não funcionam
}

console.log(module.exports)

module.exports = {
    publico: true   //Para exportar outro objeto, use o "module.exports"
}

console.log(module.exports)