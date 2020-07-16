const escola = "Cod3r" //POSICÕES: 0, 1, 2, 3, 4

console.log(escola.charAt(4)) //mostra o caractere da posicao 4
console.log(escola.charAt(5)) //mostra o caractere da posicao 5 (se nao tiver nada, mostra "nada")
console.log(escola.charCodeAt(3)) //mostra o código ASCII "binario"
console.log(escola.indexOf('d')) //mostra a posicao do caractere. Pode ser "" ou ''

console.log(escola.substring(1)) //mostra os caracteres depois da posição 1
console.log(escola.substring(0, 3)) //mostra os caracteres entre as posições (inicio, final)

console.log("Escola ".concat(escola).concat("!")) //".concat" é usado para concatenar
console.log('Escola ' + escola + "!") //"+" também pode ser usado para concatenar
console.log(escola.replace(3, 'e')) //substitui o caractere na posicao (posicao, substituir por)

console.log('Ana,Maria,Pedro'.split(',')) //transforma a string em um array (caractere para dividir a string em arrays)