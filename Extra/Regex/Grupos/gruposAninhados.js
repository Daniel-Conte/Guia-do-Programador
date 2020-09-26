const texto = 'supermercado hipermercado minimercado mercado'

console.log(texto.match(/(super|hiper|mini)?mercado/g))
console.log(texto.match(/((su|hi)per|mini)?mercado/g))
    // Esse é só um exemplo de grupos aninhados, não use NESTE CASO, pois é bem mais difícil de ler
    // O retrovisor "\1" é o grupo mais externo e o retrovisor "\2" é o grupo aninhado