function simboloMais(qtd) {
    let resultado = ''

    for(let i = 0; i < qtd; i++) {
        resultado += '+'
    }

    return resultado
}

console.log(simboloMais(2))
console.log(simboloMais(4))