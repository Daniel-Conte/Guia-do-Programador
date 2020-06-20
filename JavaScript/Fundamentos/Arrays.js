const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //arrays sem valores são "indefinidos"

valores[4] = 10
//valores[10] = 15 //arrays entre o 4 e o 10 sao indefinidos
console.log(valores)
console.log(valores.length) //mostra a quantidade de indices

valores.push({id: 3}, false, null, 'teste') //adiciona valores no array. Qualquer tipo pode ser adicionado
console.log(valores)

console.log(valores.pop()) //imprime o último valor do array e remove (saca o ultimo valor)
console.log(valores)
delete valores[0] //deleta o array na posicao desejada
console.log(valores)

console.log(typeof valores) //array é um objeto