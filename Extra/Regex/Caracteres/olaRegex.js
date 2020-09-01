const texto = 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.'

/* Estrutura da regex
    / <caracteres> / <flags>

    - No JS a expressão fica dentro de barras "/ /", exceto as flags que ficam no final
*/
const regex = /casa/gi // Procura a palavra "casa" de forma global e com insensitive case
console.log(texto.match(regex))
console.log(texto.match(/a b/)) // Procura "a b", retorna o primeiro resultado e é sensitive case