Array.prototype.filter2 = function(callback) {
    let newArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) { //if funciona em cima de true e false, se for true ele executa o bloco. Então se o criterio em "this[i]" (filter2('aqui')) for true, vai adicionar o elem
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const produtoCaro = p => p.preco >= 500
const produtoFragil = p => p.fragil

const resultado = produtos.filter2(produtoCaro).filter2(produtoFragil)
console.log(resultado)