const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!'
const texto2 = 'There is a big fog in NYC'

/*
    - "?" -> É o meta-caractere "zero ou um"(opcional)
    - Sempre vai referenciar o caractere da esquerda
*/

const regex = /fogo?/gi // Vai procurar por "fogo" ou "fog" já que "o" é opcional
console.log(texto1.match(regex))
console.log(texto2.match(regex))