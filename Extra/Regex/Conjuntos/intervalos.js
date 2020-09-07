const texto = '1,2,3,4,5,6,a.b c!d?e[f'

// Meta-caractere do intervalo é "-"
// Tem que ser usado entre 2 caracteres
// Intervalos são usados para procurar caracteres ENTRE um determinado intervalor de caracteres
// O que define esse intervalo é a ordem dos caracteres segundo a tabela UNICODE
// Intevalos são usados dentro de conjuntos

console.log(texto.match(/[a-z]/g)) // Procura TODAS as letras entre "a" e "z" incluindo essas 2
console.log(texto.match(/[b-d]/g))
console.log(texto.match(/[2-4]/g)) // O mesmo só que com números
console.log(texto.match(/[A-Z1-3]/gi)) // Procura as letras de "A" até "Z" e os números de "1" até "3"