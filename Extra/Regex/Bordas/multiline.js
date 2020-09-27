const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`
// Note que cada linha começa e termina com a mesma letra
// Existem 4 "\n" no texto quebrando as linhas

// O objetivo é retornar as 3 linhas
console.log(texto.match(/\n/g))
console.log(texto.match(/^(\w).+\1$/gi))
    // Buscando uma linha/string que comece com 1 letra e termine com a mesma
    // Neste caso não dá certo, pois as linhas não são interpretadas, é entendido como se tudo fosse 1 só linha/string que inicia e termina com "\n"

console.log(texto.match(/^(\w).+\1$/gim))
    // Usando a flag multiline "m", as linhas são interpretadas, permitindo esse uso de bordas