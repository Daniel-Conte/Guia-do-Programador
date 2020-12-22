function removerVogais(texto) {
    return texto.replace(/[aeiou]/gi, '')
}

console.log(removerVogais('Cod3r'))
console.log(removerVogais('Fundamentos'))