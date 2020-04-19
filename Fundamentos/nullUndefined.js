let valor //não inicializada
console.log(valor) //undefined

valor = null //ausencia de valor
console.log(valor) 
//console.log(valor.toString()) //Erro! um valor nulo nao pode ser usado em funcoes e afins

const produto = {}
console.log(produto.preco) //nao inicializado
console.log(produto)

produto.preco = 3.50 //inicializado
console.log(produto)

produto.preco = undefined //evite usar undefined
console.log(produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preco, mas inicializado
console.log(produto.preco)
console.log(produto)