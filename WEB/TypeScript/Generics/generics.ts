import { Data } from '../Classes/classes'

//----------------------- Generics -----------------------
    // Generics basicamente é um tipo genérico que infere um tipo baseado no valor passado, diferente do "any"(que aceita qualquer coisa)

// Usando "any"
function echo(objeto: any): any {
    // Pode receber qualquer coisa e vai retornar qualquer coisa, sem se preocupar com qual tipo seja
    return objeto
}

console.log(echo('João').length)
console.log(echo(27).length)
    // ".length" não pode ser usado em valores tipo "number", porém o TS não acusou erro na sintaxe
        // Isso acontece por causa do "any"
console.log(echo({ nome: 'João', idade: 27 }))

// Usando generics
// "<NOME>", pode ser qualquer nome
function echoMelhorado<T>(objeto: T): T {
    // O que vai acontecer é que o generics "<T>" vai pegar o tipo do valor passado para a função quando invocada, então ele passa a ser usado como um tipo dentro da função
        // O "T" é só convenção, pode ser qualquer nome
        // Simplificando, o "T" é uma variável que guarda o tipo do valor que foi passado pra função e usa esse tipo no escopo da função, assim em cada chamada desta função o "T" pode ser tipos diferentes(depende de cada chamada)
    return objeto
}

console.log(echoMelhorado('João').length)
    // Como foi passado um valor do tipo "string", o generics "T" passa ser do tipo "string" no escopo desta chamada de função
    // Já que o retorno da função é do tipo "string" e não "any", o TS consegue identificar e mostra que métodos podem ser chamados após a função
    
//console.log(echoMelhorado(27).length)
    // Como foi passado um valor do tipo "number", o generics "T" passa ser do tipo "number" no escopo desta chamada de função
    // Já que o retorno da função é do tipo "number", o TS não permite usar ".length" e lança um erro
console.log(echoMelhorado<number>(27))
    // Ao definir um generics na chamada da função, você está inferindo o tipo do "T" de forma explícita e antecipada
        // Ou seja, nesta chamada de função o "T" será o tipo "number", e a função não aceitará um valor com outro tipo
        // Se não definir de forma explícita, o TS infere o tipo de acordo com o tipo do valor passado pra função
            // Assim, a função aceita um valor de qualquer tipo, pois o generics não foi inferido de forma explícita e antecipada
console.log(echoMelhorado({ nome: 'João', idade: 27 }))


//----------------------- Array -----------------------

const avaliacoes: Array<number> = [10, 9.3, 7.7]
    // Usando generics dessa maneira é igual a usar "number[]"
        // "number[]" é um shorthand de "Array<number>"
    
avaliacoes.push(8.4)
//avaliacoes.push('5.5')
console.log(avaliacoes)

function imprimir<T>(args: T[]): void {
    // Definindo um array com tipo genérico, o tipo específico depende de cada chamada
    args.forEach(e => console.log(e))
}

imprimir([1, 2, 3])
    // É inferido o tipo "number" para o generics
imprimir<number>([1, 2, 3])
    // Inferindo explicitamente o tipo do generics
imprimir<string>(['Ana', 'Bia', 'Carlos'])
imprimir<{ nome: string, idade: number }>([
    // Inferindo explicitamente um tipo de objeto
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
])

type Aluno = { nome: string, idade: number }
    // Definindo um Alias para simplificar este tipo de objeto

// Mesmo exemplo da chamada de função anterior, porém simplificada por um ALias para o tipo do objeto
imprimir<Aluno>([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
])

//----------------------- Tipo Genérico -----------------------

type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado

console.log(chamarEcho<string>('Alguma coisa'))

//----------------------- Múltiplos Generics -----------------------

function multiGenerics<T, R, U>(p1: T, p2: R, p3: U): void {
    // É possível utilizar vários generics
    // Para inferir o tipo de cada um, existem 2 opções:
        // Pelos parâmetros: Atribuindo cada generics para cada parâmetro, assim o tipo do valor passado para tal parâmetro será o tipo de tal generic
        // Inferindo explicitamente: Inferir o tipo de cada generic na chamada da função
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

multiGenerics(1, true, 'asdasd')
    // Inferindo o tipo dos generics pelos parâmetros
multiGenerics<boolean, string, number>(false, 'aaaaa', 5)
    // Inferindo o tipo dos generics de forma explícita

//----------------------- Classes -----------------------

abstract class OperacaoBinaria<T, R> {
    // A definição do generics vai após o nome da classe
    constructor(
        public operando1: T,
        public operando2: T
        ) {}

    abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria<number, number> {
    // Neste caso é necessário inferir o tipo dos generics de forma explícita

    executar(): number {
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(3, 4).executar())
console.log(new SomaBinaria(10, 45).executar())

// Desafio: Criar uma classe que recebe 2 datas e retorna uma string com a diferença de dias

class DiferencaDatas extends OperacaoBinaria<Data, string> {

    executar() {  
        const t1: number = this.dataParaMilissegundos(this.operando1)
        const t2: number = this.dataParaMilissegundos(this.operando2)
        const diferenca: number = Math.abs(t1 - t2)
            // "Math.abs(<expressao>)" retorna o valor absoluto (sempre positivo)
        const dias: number = Math.ceil(diferenca / 86400000)
            // Transforma milissegundos em dias

        return `${dias} dia(s)`
    }

    dataParaMilissegundos(data: Data): number {
        const {dia, mes, ano} = data

        return new Date(ano, mes, dia).getTime()
    }
}

// Usando a classe "Data" do arquivo "classes.ts"
const data1 = new Data(1, 0, 2021)
const data2 = new Data(1, 0, 2022)

console.log(new DiferencaDatas(data1, data2).executar())

//----------------------- Restrições(Constraints) -----------------------
    // É possível passar restrições para o generics usando "extends", assim é possível permitir que somente alguns tipos passem
        // É possível passar tipos, interfaces, elementos fixos...
    // Ao usar restrições, é preciso inferir explicitamente o tipo do generic na chamada, senão pode dar alguns bugs

class Fila<T extends number | string> {
    // Somente valores do tipo "number", "string" e suas subclasses são aceitos
    constructor(
        private fila: T[]
    ) {}

    entrar(elemento: T): void {
        this.fila.push(elemento)
    }

    proximo(): T | undefined {
        return this.fila.shift()
    }

    imprimir(): void {
        console.log(this.fila)
    }
}

const f1 = new Fila<string>(['Ana', 'João', 'Bia', 'Pedro'])
    // Ao usar restrições, é preciso inferir explicitamente o tipo do generic na chamada
f1.imprimir()
console.log(f1.proximo())
f1.imprimir()
console.log(f1.proximo())
f1.entrar('Marta')
f1.imprimir()

const f2 = new Fila<number>([1, 2, 3, 4])
f2.imprimir()
console.log(f2.proximo())
f2.imprimir()
console.log(f2.proximo())
f2.entrar(5)
f2.imprimir()

function retornarValor<T, K extends keyof T>(obj: T, chave: K): T[K] {
    // "K extends keyof T" significa que o generic "K" só vai aceitar as chaves que estão presentes no generic "T"
    return obj[chave]
}

const objeto = {
    a: 1,
    b: 2,
    c: 3
}

console.log(retornarValor(objeto, 'a'))
    // A chave "a" está presente em "objeto", então o generic "K" irá aceitar

//console.log(retornarValor(objeto, 'm'))
    // A chave "m" não está presente em "objeto", então o generic "K" não irá aceitar

// Desafio Mapa
// Array de Objetos (chave/valor) -> itens
// Métodos: obter(chave), colocar({ C, V }), limpar(), imprimir()

type Par<C, V> = { chave: C, valor: V}

class Mapa<C, V> {
    private itens: Par<C, V>[] = []

    obter(chave: C): Par<C, V> | null {
        const resultado = this.itens.filter(item => item.chave === chave)

        return resultado ? resultado[0] : null
    }

    colocar(novoItem: Par<C, V>): void {
        let existe = this.obter(novoItem.chave)

        if(existe) {
            existe.valor = novoItem.valor
        } else {
            this.itens.push(novoItem)
        }
    }

    limpar(): void {
        this.itens = new Array<Par<C, V>>()
        // Ou
        //this.itens.splice(0)
    }

    imprimir(): void {
        console.log(this.itens)        
    }
}

const mapa = new Mapa<number, string>()

mapa.imprimir()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
mapa.imprimir()

console.log(mapa.obter(1))
console.log(mapa.obter(2))
console.log(mapa.obter(3))
console.log(mapa.obter(7))
mapa.limpar()
mapa.imprimir()