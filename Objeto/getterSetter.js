const sequencia = {
    _valor: 1, //Convencao (só pra dizer que esse atributo é privado)
    //"get" e "set" são usados para chamar e setar atributos indiretamente
    get valor() { return this._valor++ }, // Chama uma funcao que retorna o valor da variavel e incrementa 1
    set valor(valor) {  //Poe uma condicao para a atribuicao de um valor na variavel
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)  //Chamando direto a funcao get
sequencia.valor = 1000 //chamando direto a funcao set
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
