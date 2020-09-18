const texto = `Lista telefônica:
    - (11) 98756-1212
    -98765-4321 ...`

// Formas de resolução
console.log(texto.match(/[(\d)]*[\s]?\d{5}-\d{4}/g))

console.log(texto.match(/\(?\d{0,2}\)? ?\d{4,5}-\d{4}/g))