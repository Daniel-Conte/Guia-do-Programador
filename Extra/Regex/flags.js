/* 
    - As flags ficam no final da expressão

    g -> global
        - Faz a regex retornar todos os resultados encontrados
        - Sem essa flag, a regex irá retornar somente o primeiro resultado

    i -> ignore case
        - Ignora se letras são maiúsculas ou minúsculas (insensitive case)
*/

const texto = 'Carlos assinou o abaixo-assinado.'
console.log(texto.match(/C|ab/)) // Busque "C" ou "ab". Retorna o primeiro resultado
console.log(texto.match(/c|ab/i)) // Busque "c" ou "ab". Retorna o primeiro resultado e é insensitive case
console.log(texto.match(/ab|c/gi)) // Busque "ab" ou "c". Retorna todos os resultados e é insensitive case