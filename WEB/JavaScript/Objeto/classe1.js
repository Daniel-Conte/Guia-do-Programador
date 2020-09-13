/*
    - Classes são tranformadas em funcoes construtoras
    - "class <nomeDaFunção>" cria uma nova classe
        - O nome da função deve iniciar com letra MAIÚSCULA
    - Classes NÃO fazem Hoisting, ou seja, você deve criar a classe ANTES de estanciá-la
*/

class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        /* "constructor(<parametros>)" é onde será iniciada as propriedades/atributos
            - Todos os atributos que você quer que sejam acessados fora do constructor devem ser add ao "this"
                - "this" é um objeto que está referenciando esta classe(Lancamento)
                - Todos os atributos add no "this"(dentro do constructor) serão acessíveis em qualquer lugar dentro desta classe(Lancamento) usando "this.<atributo>"
            - Quem está instanciando essa classe vai receber estes atributos
        */
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    // É possível criar funções dentro de uma classe sem "function" no inicio
        // Quem está instanciando essa classe vai receber estas funções    
    addLancamentos(...lancamentos) { // Espalhando todos os parâmetros recebidos dentro de um array
        lancamentos.forEach(l => this.lancamentos.push(l)) // Esse this está referenciando "lancamentos" do constructor
            // (ou seja) Acessando o atributo "lancamentos" dentro do objeto "this"
    }

    // Para quem está instanciando essa classe NÃO receber uma função, usa-se "static"
        // Essa função ficará privada à esta classe
        // Só poderá ser acessada assim -> CicloFinanceiro.Teste()
    static Teste() {
        console.log("Teste...")
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000) // Esses parâmetros serão enviados para o "constructor()" da classe
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())