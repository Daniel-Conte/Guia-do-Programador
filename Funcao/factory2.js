function criarProduto(nome, preco) {
    return {
        nome,   //com parametros nao precisa por "nome: nome"
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))