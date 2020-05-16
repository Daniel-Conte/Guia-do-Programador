const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const produtoCaro = p => p.preco >= 500
const produtoFragil = p => p.fragil //Não precisa colocar "== true"
//O filter retorna true/false a partir de um criterio. Se o elemento for true, ele é adicionado no novo array, se for false não é adicionado
const resultado = produtos.filter(produtoCaro).filter(produtoFragil)
console.log(resultado)