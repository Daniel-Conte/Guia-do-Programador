const nums = [1, 2, 3, 4, 5]

// map é um For com proposito
let resultado = nums.map(function(e) { //map percorre cada elemento do array e retorna um NOVO array do mesmo tamanho, mas com os elementos transformados por algum criterio
    return e * 2 //vai retornar um array com os valores dobrados
}) //map não modifica o array original

console.log(resultado)

//Forma de fazer uma cadeia de maps. Para ir transformando os valores cada vez com um criterio diferente

const soma10 = e => e + 10 //Armazenando os criterios dentro de uma variavel, para tornar menos confuso o codigo
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) //Transformando o array a partir de varios criterios
console.log(resultado)