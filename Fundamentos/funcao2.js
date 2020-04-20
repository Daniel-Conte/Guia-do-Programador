//armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazendando uma funcao arrow em uma variavel
const soma = (a, b) => {    //"=>" substitui a palavra "function"
    return a + b
}

console.log(soma(2, 3))

//retorno implicito
const subtracao = (a, b) => a - b   //funcao sem "{}" executa só a linha
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)   //quando for 1 so parametro nao precisa usar "()"
imprimir2("Legal!!!")