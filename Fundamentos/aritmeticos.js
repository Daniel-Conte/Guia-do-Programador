const [ a, b, c ,d ] = [3, 5, 1, 15]        //pode-se usar destructuring para declarar variaveis mais pratico

const soma = a + b + c + d                              //"d++" - Postfix
const subtracao = d - b                                 //"a + b" - Infix
const multiplicacao = a * b                             //"++d" - Prefix
const divisao = d / a
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, divisao, modulo)