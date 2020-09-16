const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46'

/*
    - {<minimo>,<maximo>} -> É um quantificador personalizado
    - Delimitado por chaves "{ }", é possível definir um quantidade mínima e máxima
    - Se passar somente 1 número, vai procurar a quantidade exata
    - Se passar 1 número e vírgula({2,}), vai procurar a quantidade daquele número em diante(sem limite)
*/

console.log(texto.match(/\d{1,2}/g)) // Procura os dígitos com 1 ou 2 caracteres
    // Vai dividir números maiores
        // Ex: "12" e "0" de "120"
console.log(texto.match(/[0-9]{2}/g)) // Procura números com 2 caracteres
console.log(texto.match(/\d{1,}/g)) // Procura números com 1 caractere ou mais

console.log(texto.match(/\w{7}/g)) // Procura palavras com 7 caracteres
    // Se tiver palavras com mais de 7 caracteres, retorna essas palavras cortadas
    // Não retorna "milhões" porque no shorthand "\w" não tem "õ"
console.log(texto.match(/[\wõã]{7,}/g)) // Procura palavras com 7 caracteres ou mais
    // Agora procura palavras com "õ" ou "ã"

// Usando Bordas
console.log(texto.match(/\b\d{1,2}\b/g))
console.log(texto.match(/\b[\wõ]{7}\b/g))