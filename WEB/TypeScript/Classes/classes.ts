// As classes no TS possuem mais recursos do que as classes no JS

//----------------------- Classes -----------------------

export class Data {
    // Tanto os atributos como os métodos são públicos por padrão
    dia: number
    public mes: number
        // "public" não muda nada, pois é padrão
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia,
        this.mes = mes,
        this.ano = ano
    }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data
casamento.ano = 2017
console.log(casamento)

//-----------------------

// Um jeito mais curto para criar uma classe
// Um jeito mais curto de fazer a mesma coisa que a classe acima
class DataEsperta {
    // Sem criar atributos explícitos

    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {}
        // Se usar um modificador de acesso nos parâmetros do construtor, estes parâmetros se tornarão atributos normais, a mesma coisa da classe acima
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)

//-----------------------

class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {}

    public resumo(): string {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`
    }

    precoComDesconto(): number {
        return this.preco * (1 - this.desconto)
    }
}

const prod1 = new Produto('Caneta BIC', 5.50)
console.log(prod1.resumo())
const prod2 = new Produto('Caderno do Batman', 25.75, 0.2)
console.log(prod2.resumo())

//----------------------- Herança -----------------------

class Carro {
    // Mesmo com modificador de acesso "private", é possível acessar esse atributo de fora da classe (mesmo com o TS gerando erros), pois no JS "private" não existe.
        // Então sempre configure o TS para não compilar quando há erros no código
    private velocidadeAtual: number = 0
        // Atributos e métodos privados não são herdados pela classe filho

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {}

    protected alterarVelocidade(delta: number): number {
        // "protected" é um modificador de acesso que impede que o atributo/método seja acessado de fora da classe (igual ao "private"), porém, permite que o atributo/método seja herdado pela classe filho (ao contrário de "private")
        const novaVelocidade: number = this.velocidadeAtual + delta
        const velocidadeValida: boolean = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

        if(velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = novaVelocidade > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford', 'Ka', 185)

console.log(carro1.acelerar())
console.log(carro1.frear())

//-----------------------

class Ferrari extends Carro {
    // Esta classe herda todos os atributos e métodos da classe pai(Carro) que não estejam com modificador de acesso "private"

    constructor(modelo: string, velocidadeMaxima: number) {
        // Esta classe já é uma marca específica da classe "Carro", então é desnecessário passar a marca novamente em cada instância
            // Para resolver isso é criado um construtor somente com o modelo e a velocidade máxima como parâmetros, e a marca é passada para a classe "Carro" como valor fixo. Ao criar um construtor em uma classe filho, é necessário usar o método "super()"

        super('Ferrari', modelo, velocidadeMaxima)
            // O método "super()" manda dados para a classe pai(Carro)
            // Os parâmetros passados são os mesmos do construtor da classe pai
    }

    // É possível modificar os métodos herdados
    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())

//----------------------- Getters & Setters -----------------------

class Pessoa {
    private _idade: number = 0
        // "_<atributo>" é uma convenção para nomes de atributos privados que serão acessados por meio de "Getters" e "Setters"

    // "Getters" são usados para acessar atributos privados fora da classe
    get idade(): number {
        return this._idade
    }

    // "Setters" são usados para setar valores privados de fora da classe
    set idade(valor: number) {
        if(valor >= 0 && valor <= 120) {
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa()

// "Getters" e "Setters" são acessados como atributos normais
pessoa1.idade = 10
    // Usando "Setter"
    // O valor passado para o "Setter" deve ser atribuído e não passado como parâmetro de função
console.log(pessoa1.idade)
    // Usando "Getter"

pessoa1.idade = -3
    // O valor não é aceito pois não passa pela condição do "Setter"
console.log(pessoa1.idade)


//----------------------- Membros Estáticos -----------------------
    // Basicamente, atributos e métodos estáticos são membros que podem ser acessados SEM INSTANCIAR a classe

class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return Matematica.PI * (raio ** 2)
            // Já que é estático e não será usado instâncias, dá pra acesar diretamente
    }
}

// Se os membros não fossem estáticos, seriam utilizados assim:
/* const m1 = new Matematica()
console.log(m1.PI)
console.log(m1.areaCirc(4)) */

// Para acessar membros estáticos, basta acessá-los direto da classe
console.log(Matematica.PI)
console.log(Matematica.areaCirc(4))

// Exemplos de métodos estáticos que são muito utilizados
console.log(Math.max(1, 4, 2, 7, 3))
console.log(Math.min(1, 4, 2, 7, 3))
console.log(Math.pow(3, 2))

//----------------------- Classe Abstrata -----------------------
    // São classes mais genéricas que servem para serem herdadas pelas classes filhas
    // Não podem ser instanciadas
    // Ex real: Você não pode ter um celular original/puro, você tem um celular de uma marca e de um modelo. Este celular puro é abstrato e contém as funcionalidades que todo celular tem, então, basicamente, os modelos de celular são classes filhas que herdam as funcionalidades da classe Celular

abstract class Calculo {
    // Não é possível instanciar esta classe, só é possível herdá-la
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void
        // Métodos abstratos são métodos SEM CORPO em que as classes filhas DEVEM adicionar um corpo para o método (somente as classes "não-abstratas"/concretas)
        // Todas as classes filhas devem ter este igual método abstrato, somente o corpo pode ser diferente(cada classe cria o corpo conforme sua necessidade)

    getResultado(): number {
        return this.resultado
    }
}

// Todas as classes filhas de Calculo herdam suas características
class Soma extends Calculo {
    executar(...numeros: number[]): void {
        // Adicionando um corpo para o método abstrato herdado
        this.resultado = numeros.reduce((total, atual) => total + atual)
    }
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((total, atual) => total * atual)
    }
}

let c1: Calculo = new Soma()
    // É possível usar uma classe abstrata como um tipo genérico(engloba todas as classes filhas)
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicacao()
c1.executar(2, 3, 4, 5)
    // Pra isso que servem os métodos abstratos, todas as classes filhas tem o mesmo método, só com uma lógica diferente
console.log(c1.getResultado())

//----------------------- Singleton -----------------------
    // "Singleton" é um padrão de projeto que basicamente é uma classe de UMA ÚNICA INSTÂNCIA para toda a aplicação, ou seja, em qualquer chamada desta classe em qualquer parte da aplicação, a instância é sempre a mesma

class Unico {
    private static instance: Unico = new Unico
        // Cria a única instância desta classe que será usada em toda a aplicação
        // "private" para impedir que este atributo seja acessado de fora
        // "static" para poder acessar este atributo direto da CLASSE e não pela INSTÂNCIA DA CLASSE como é feito normalmente
    
    private constructor() {}
        // Construtor privado impede que a classe seja instanciada de fora

    static getInstance(): Unico {
        // Este método sempre irá retornar a MESMA INSTÂNCIA desta classe (já que foi criada somente UMA e o construtor é privado)
        // Como é estático, é possível acessar de fora sem instanciar a classe
        return Unico.instance
            // Já que o atributo "instance" é estático e será retornado sempre a MESMA INSTÂNCIA, é possível acessar diretamente da classe
    }

    // Os métodos e atributos que NÃO SÃO ESTÁTICOS, só podem ser acessados por meio de uma instância (como ocorre normalmente)
        // Então estes métodos SÓ podem ser acessados de fora por meio do método estático "getInstance()", pois ele retorna uma instância
    agora(): Date {
        return new Date
    }
}

//const errado = new Unico()
    // Não é possível instanciar pois o construtor é privado
//const errado = Unico.agora()
    // Não é possível acessar o método "agora()" sem instância, pois não é um método estático

// A ÚNICA MANEIRA de acessar um atributo ou método não-estático, é por meio do método estático "getInstance()", pois ele retorna uma instância
console.log(Unico.getInstance().agora())

//----------------------- Somente Leitura -----------------------

class Aviao {
    readonly modelo: string
        // O modificador de acesso "readonly" torna o atributo somente leitura, como se fosse uma constante

    constructor(modelo: string, readonly prefixo: string) {
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
//turboHelice.modelo = 'DC-8'
//turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice)