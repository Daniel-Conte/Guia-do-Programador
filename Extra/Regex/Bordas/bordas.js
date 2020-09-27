const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi))
    // "^" Fora de um conjunto representa início da linha/string
    // Retorna o resultado que está no início da string
console.log(texto.match(/r$/gi))
    // "$" Representa fim da linha/string
    // Retorna o resultado que está no fim da string

console.log(texto.match(/^r.*r$/gi))
    // Na teoria retornaria uma string que começa e termina com "r", porém o meta-caractere "." não cobre "\n"

// Solução
console.log(texto.match(/^r.*r$/gis))
    // Adicionando a flag "s", resolve o problema do "."