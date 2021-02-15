//----------------------- Interfaces -----------------------
    // Interfaces funcionam praticamente como tipos de objeto, onde o objeto deve seguir a estrutura da interface(o nome dos atributos deve ser igual)
    // Interfaces são mais usadas num contexto de orientação a objetos, para definir "contratos"/"moldes"

interface Humano {
    nome: string
    idade?: number
        // Adicionando "?" logo após o nome do atributo, faz com que esse atributo seja opcional, então o objeto pode ou não ter esse atributo
    [prop: string]: any
        // [<nomeQualquer>: string]: any
        // Atributo dinâmico, aceita qualquer atributo que seja passado. Um "coringa"
    saudar(sobrenome: string): void
        // Métodos são definidos sem o corpo
        // Para tornar opcional, basta add "?" logo após o nome do método
}

function saudarComOla(pessoa: Humano): void {
    console.log('Olá ' + pessoa.nome)
}

function mudarNome(pessoa: Humano): void {
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string): void {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
//saudarComOla({ nome: 'Jonas' })
    // Como "idade" é opcional, pode passar sem ela
//saudarComOla({ nome: 'Jonas', idade: 27 })
//saudarComOla({ nome: 'Jonas', idade: 27, xyz: true })
    // O atributo dinâmico aceita qualquer atributo e qualquer valor
pessoa.saudar('Skywalker')

//----------------------- Usando Classes -----------------------

// Para utilizar uma interface em uma classe, basta utilizar o "implements"
// class <NomeClasse> implements <NomeInterface>
class Cliente implements Humano {
    // Precisa respeitar os atributos obrigatórios da interface, mas é possível adicionar atributos que não estão na interface
    nome: string = ''
    ultimaCompra: Date = new Date
    compras: string[] = ['Arroz', 'Feijão']
        // Adicionando atributos que não estão na interface
    saudar(sobrenome: string): void {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)        
    }
}

const meuCliente: Cliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
    // Como os atributos e tipos são compatíveis é possível usar
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

//----------------------- Interface com Função -----------------------

// Definindo uma interface para implementar em funções
interface FuncaoCalculo {
    // Apenas defina os parâmetros e os tipos
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
    // Outras formas de calcular potência
    // Array(exp).fill(base).reduce((acc, atual) => acc * atual)
    // Math.pow(base, exp)
    return base ** exp
}

console.log(potencia(3, 10))

//----------------------- Herança -----------------------
    // O sistema de herança com interfaces é praticamente o mesmo das classes

interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    // Usa-se "extends" para herdar as características
    c(): void
        // É possível adicionar mais coisas
}

// Testando a herança
class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

function teste(b: B): void {
    b.b()
    console.log('Funcionou!')    
}
teste(new RealABC)
    // Mesmo o parâmetro da função sendo do tipo B e ao invocar está o tipo ABC, não dá erro, pois o tipo B é herança do tipo ABC

abstract class AbstrataABD implements A, B {
    // Classes abstratas devem respeitar a estrutura das interfaces implementadas
    a(): void {}
    abstract b(): void
        // É possível tornar abstrato os métodos recebidos das interfaces implementadas
    abstract d(): void
}

//----------------------- Estendendo Prototypes -----------------------
    // O TS tem uma interface para cada tipo primitivo, então ao criar uma nova função no prototype, é necessário adicionar essa função à interface do tipo primitivo

// Para resolver o erro do prototype, basta adicionar a função criada na interface de "Object"
interface Object {
    // Para estender a interface, basta "criá-la" novamente
    log(): void
}

Object.prototype.log = function() {
    console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

// Mesmo tendo adicionado a função "log" no prototype, continua dando erro
    // Isso ocorre pois esta função não foi adicionada na interface "Object"
    // Esse erro é somente do TS, o código JS gerado funciona normalmente pois no JS está certo
x.log()
y.log()
z.log()

const cli = {
    nome: 'Pedro',
    toString() {
        return this.nome
    }
}

cli.log()