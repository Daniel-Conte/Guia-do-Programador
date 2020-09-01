const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/ // Procura a primeira ","
console.log(texto.split(regexVirgula))
console.log(texto.match(regexVirgula))

console.log(texto.match(/,/g)) // Procura todas as ","
console.log(texto.match(/A/g)) // Procura todas as letras "A"
console.log(texto.match(/A/gi)) // Procura todas as letras "A" ou "a"
console.log(texto.match(/2/g)) // Procura todos os números "2"
console.log(texto.match(/b c!d/)) // Procura a primeira expressão "b c!d"