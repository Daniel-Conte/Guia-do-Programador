const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!'
const texto2 = 'There is a big fog in NYC'

/*
    - "+" -> É o meta-caractere "um ou mais"
    - Sempre vai referenciar o caractere da esquerda
*/

const regex = /fogo+/gi // Vai procurar por "fogo" ou "fogo" com mais de um "o"
console.log(texto1.match(regex))
console.log(texto2.match(regex))

const texto3 = 'Os números: 0123456789.'
console.log(texto3.match(/[0-9]/g)) // Retorna cada número individual
console.log(texto3.match(/[0-9]+/g)) // Retorna todos os números juntos
    // "+" referenciando um conjunto, retorna todos os caracteres encontrados juntos(em 1 elemento do array)