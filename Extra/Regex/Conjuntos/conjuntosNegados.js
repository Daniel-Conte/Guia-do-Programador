const texto = '1,2,3,a.b c!d?e[f'

// Conjuntos Negados são usados para EXCLUIR os caracteres dentro do conjunto na procura. Não vai procurar...
// Meta-caractere do Conjunto Negado é "^"(circunflexo)
// Precisa ser usado no INÍCIO do conjunto, senão é lido de forma LITERAL "[^....]"
// Se usar fora de um conjunto tem outro significado

console.log(texto.match(/\D/g)) // Shorthand que nega todos os dígitos(números)
console.log(texto.match(/[^0-9]/g)) // Nega todos os dígitos(números)
console.log(texto.match(/[^\d!?\[\s,.]/g)) // Nega todos esses caracteres e os shorthands("\d", "\s")

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

console.log(texto2.match(/[^!-/:-@\s]/g)) // Nega os intervalos de "!" até "/", ":" até "@" e o shorthand "\s"