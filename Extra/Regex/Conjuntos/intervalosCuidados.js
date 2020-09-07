const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g)) // Normal...
console.log(texto.match(/a-c/g)) // Não é intervalo. Procura "a-c" literal

console.log(texto.match(/[A-z]/g)) // Procura os caracteres entre "A" e "z" segundo a ordem dos caracteres na tabela UNICODE. Entre os caracteres MAIÚSCULOS e MINÚSCULOS existem uns símbolos

// Precisa respeitar a tabela UNICODE
// Os caracteres precisam estar em ordem crescente, senão dá erro

//console.log(texto.match(/[a-Z]/g))
//console.log(texto.match(/[4-1]/g))