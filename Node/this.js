console.log(this === global)    //No escopo global o "this" aponta para "module.exports"
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma funcao...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) //Dentro de uma funcao o "this" aponta para o "global"

    this.perigo = '...'
}

logThis()