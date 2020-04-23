function soma() {
    let soma = 0
    for(i in arguments) {         //quando a funcao nao tiver parametros, "arguments" vai receber todos os valores que foram chamados na funcao
        soma += arguments[i]      //"arguments" é um array interno. Todas as funcoes tem
    }
    return soma
}

console.log(soma(0))
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))    //a funcao vai receber TODOS os valores que forem enviados

console.log(soma(1.1, 2.2, 'teste'))    //incluindo outros tipos de dados
console.log(soma('a', 'b', 'c'))