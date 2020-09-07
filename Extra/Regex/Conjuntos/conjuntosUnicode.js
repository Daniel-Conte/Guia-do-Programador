const texto = 'áéíóú àèìòù âêîôû ç ãõ ü'
console.log(texto.match(/[À-ü]/g)) // Procura todos os caracteres entre esses 2 na ordem da table UNICODE

console.log(texto.match(/[\u00C0-\u00FC]/g)) // Também é possível utilizar códigos UNICODE nos intervalos