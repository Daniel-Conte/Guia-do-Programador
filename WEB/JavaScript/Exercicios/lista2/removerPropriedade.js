function removerPropriedade(obj, remover) {
    const resultado = { ...obj }
    delete resultado[remover]

    return resultado
}

console.log(removerPropriedade({a: 1, b: 2}, 'a'))
console.log(removerPropriedade({
    id: 20,
    nome: 'caneta',
    descricao: 'Não preenchido'
}, 'descricao'))