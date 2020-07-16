//funcao sem retorno
function imprimirSoma(a, b){ //a e b sao parametros
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //so um parametro usado = NaN
imprimirSoma(2, 10, 4, 14, 56) //se tiver mais numeros que os parametros, vão ser usados só os primeiros numeros, o resto é ignorado
imprimirSoma() //vazio = NaN

//funcao com retorno
function soma(a, b = 1){ //pode-se atribuir um valor padrao a um parametro. Caso nenhum valor for atribuido a esse parametro ele vale um valor padrao(nesse caso 1)
    return (a + b)
}

console.log(soma(2, 3)) //3 vai ser atribuido a b
console.log(soma(2))    //b nao tem valor a ser atribuido, entao vai ser atribuido o valor padrao(nesse caso 1)
console.log(soma())     //undefined + 1 = NaN