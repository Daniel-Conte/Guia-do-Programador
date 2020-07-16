module.exports = function(...nomes) { //Todos os parametros(quantos quiser) irão ficar dentro de um array
    return nomes.map(nome => `Boa Semana ${nome}!`)
}