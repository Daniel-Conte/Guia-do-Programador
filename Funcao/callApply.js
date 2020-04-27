function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,         //"preco" e "desc" tem os mesmos nomes que na funcao "getPreco" entao se este objeto for referenciado, a funcao vai receber esses atributos como valores
    getPreco            //o atributo "getPreco" esta associado a funcao "getPreco"
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) //na funcao "getPreco" o "preco" e o "desc" sao globais por causa do "this" entao eles nao achar parametros locais, vao procurar no escopo global
console.log(produto.getPreco()) //a funcao "getPreco" vai procurar as variaveis "preco" e "desc" dentro do obj "produto". Pode-se chamar a funcao assim pois a funcao é referenciada como um atributo dentro do obj.

const carro = { preco: 49990, desc: 0.20 }  //neste obj nao ha uma referencia para a funcao "getPreco" entao para usar os atributos precisa-se usar o "call" ou "apply"

console.log(getPreco.call(carro))   //"call" chama uma funcao (getPreco) para aplicar dentro de um contexto (carro).
console.log(getPreco.apply(carro))  //"apply" funciona da mesma forma que o "call", mas ha uma diferenca na hora de passar os parametros

console.log(getPreco.call(carro, 0.17, '$'))    //"call" primeiro estabelece um contexto (carro) e depois passa os valores(imposto, moeda) normalmente para a funcao (getPreco).
console.log(getPreco.apply(carro, [0.17, '$'])) //"apply" funciona da mesma forma que o "call", porem os valores sao passados dentro de um array