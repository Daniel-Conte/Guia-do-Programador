const sequence = { //Sequencia dos IDs dos produtos
    _id: 1,
    get id() { return this._id++ } //Cada vez que o atributo "id" for chamado, irá retornar o valor atual e incrementar 1
}

const produtos = {} //Onde irá ficar todos os produtos cadastrados

function salvarProduto(produto) { //salvar um produto no bd
    if(!produto.id) { produto.id = sequence.id } //Se o id do produto for falso, ele irá receber o id da sequencia
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) { //chama um produto específico
    return produtos[id] || {} //Se for false retorna objeto vazio
}

function getProdutos() { //Chama todos os produtos
    return Object.values(produtos) //Retorna só os valores dos atributos
}

function excluirProduto(id) { //Exclui um produto específico
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto } //Exportando as funcoes