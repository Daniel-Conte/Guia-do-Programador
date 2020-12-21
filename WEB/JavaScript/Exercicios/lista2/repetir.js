function repetir(repetir, qtd) {
    const resultado = []

    for(let i = 0; i < qtd; i++) {
        resultado.push(repetir)
    }

    return resultado
}

console.log(repetir('código', 2))
console.log(repetir(7, 3))