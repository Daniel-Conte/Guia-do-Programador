//----------- string -----------
let nome = 'João'
    // Mesmo escrevendo um código JS puro, o TS infere automaticamente um tipo para a variável baseado no tipo do valor
console.log(nome)
//nome = 28
    // Já que na variável "nome" já foi inferido o tipo "string", o TS não permite atribuir um valor de tipo diferente
        // Mesmo com erro o TS traduz o código para JS, e no JS esse erro para de existir pois tem tipagem dinâmica, então o código é executado normalmente
            // Para impedir isso, deve-se configurar o 'tsconfig.json'

//----------- number -----------
    // JS e TS interpretam números Reais e Inteiros como sendo Number
let idade = 27
//idade = 'Ana'
idade = 27.5
console.log(idade)

//----------- boolean -----------
let possuiHobbies = false
//possuiHobbies = 1
console.log(possuiHobbies)

//----------- Tipagem dinâmica -----------
    // Mesmo sendo TS, existe como inferir tipagem dinâmica
let minhaIdade
    // Caso a variável não seja inicializada, o TS infere o tipo "any" que pode ser atribuido valores de qualquer tipo
let minhaIdade2: any
    // Forma explícita para setar tipagem dinâmica
minhaIdade = 27
minhaIdade = 'Idade 27'
console.log(minhaIdade)

//----------- Tipos implícitos -----------
let minhaIdade3: number
    // Para especificar o tipo da variável explicitamente: ": <tipo>"
minhaIdade3 = 27
//minhaIdade3 = '27'
console.log(minhaIdade3)


//----------- Array -----------
    // Para inferir o tipo array: ": <tipo>[]"
let hobbies: any[] = ['Cozinhar', 'Praticar Esportes']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
//hobbies = 100
console.log(hobbies)

//----------- Tuplas -----------
    // Tupla é um tipo de array com valores/tipos obrigatórios
    // Para inferir o tipo tupla: ": [<tipo>, <tipo>, <tipo>, ...]"
let endereco: [string, number, string] = ["Av. Principal", 99, ""]
    // O valor da variável precisa necessariamente ter a mesma quantidade de elementos e os tipos na ordem correta do tipo inferido

//endereco = [88, "Bloco A", ""]
//endereco = ["Av. Principal", 99]
console.log(endereco)
endereco = ["Rua importante", 1260, "Bloco C"]
console.log(endereco)

//----------- Enum -----------
    // Enum é um tipo em que se pode definir valores pré-definidos
    // Cada valor pré-definido retorna um número inteiro(caso não seja atribuido outro valor). O valor retornado é aumentado em 1 a cada elemento
    // É possível passar valores string, mas então precisa inicializar todos os valores
enum Cor {
    Cinza, // 0
    Verde = 'dgdg', // 'dgdg'
    Azul = 10, // 10
    Amarelo, // 11
    Laranja, // 12
    Vermelho= 100 // 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

minhaCor = Cor.Cinza
console.log(minhaCor)
console.log(Cor.Laranja)


//----------- Funções -----------
function retornaMeuNome(): string {
    // Ao passar um tipo no final da função, está declarando que esta função só retorna string
    return nome
}
console.log(retornaMeuNome())

function digaOi(): void {
    // "void" significa que a função não irá retornar nada
    console.log('Oi')
}
digaOi()

function multiplicar(numA: number, numB: number): number {
    // Declarando um tipo para cada parâmetro
    return numA * numB
}
//console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.7, 9))

//----------- Tipo Função -----------
let calculo: (x: number, y: number) => number
    // Declara uma função como sendo o tipo
        // O tipo função precisa ser uma Arrow Function
        // A variável só irá receber funções que tenham os mesmos parâmetros(tipos) e retorno(tipo)

//calculo = 2
//calculo = digaOi
calculo = multiplicar

console.log(calculo(5, 6))

//----------- Objetos -----------
let usuario: { nome: string, idade: number } = {
    // Declarando um tipo de objeto
    // O par chave/valor que este objeto irá receber deverão ter os mesmos nomes e tipos declarados no tipo
        // As chaves não precisam ser necessariamente na mesma ordem
    nome: 'João',
    idade: 27
}
console.log(usuario)
//usuario = { nome: 'Ana'}
//usuario = { name: 'Maria', age: 27 }
usuario = {
    idade: 27,
    nome: 'Maria'
}
console.log(usuario)

//----------- Alias -----------

// É possível criar tipos personalizados(Alias), assim facilita muito a reutilização e deixa o código mais limpo
// É muito parecido com "Interface", mas difere em alguns pontos
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
    supervisores: ['Adriano', 'Mateus', 'Ana'],
    baterPonto: (horario: number): string => horario <= 8 ? 'Ponto normal' : 'Fora do horário'
}

let funcionário2: Funcionario = {
    supervisores: ['Maria', 'Chico', 'Bárbara'],
    baterPonto: (horario: number): string => horario <= 8 ? 'Ponto normal' : 'Fora do horário'
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(7))
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

//----------- Union Types -----------
// Ao invés de declarar somente 1 tipo ou todos(any), é possível declarar tipos opcionais
let nota: number | string = 10
    // O valor pode ser do tipo "number" ou "string"
    // É possível encadear mais tipos
console.log(`Minha nota é ${nota}!`)
nota = '10'
//nota = true
console.log(`Minha nota é ${nota}!`)

//----------- Tipo Never -----------
// É um tipo estranho, ele só pode ser usado em funções que nunca terminam ou que geram erro(pode ser usado em validações)
function infinito(): never {
    while(true) {}
        // Nunca acaba
}

function falha(msg: string): never {
    throw new Error(msg)
        // Lança um erro
}

const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0) {
            falha('Preço inválido!')
        }
    }
}

produto.validarProduto()

//----------- Null -----------
    // Por padrão, o TypeScript não permite valores nulos para não gerar possíveis erros, mas há maneiras de possibilitar isso

let valorNulo: null = null
    // É meio que inútil declarar um tipo "null"
//valorNulo = 23
console.log(valorNulo)

let nulo = null
    // Se inicializar uma variável com valor nulo, será inferido o tipo "any"
console.log(nulo)
nulo = 24
console.log(nulo)

let alturaOpcional: null | number = 12
    // É possível atribuir valores opcionais/nulos utlizando "union types"
console.log(alturaOpcional)
alturaOpcional = null
console.log(alturaOpcional)

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '123456789',
    tel2: null
}
console.log(contato1)

//----------- Desafio -----------
// Traduzir de JS para TS

//----------- JS -----------
let contaBancaria = {
    saldo: 3456,
    depositar(valor: any) {
        this.saldo += valor
    }
}

let correntista = {
    nome: 'Ana Silva',
    contaBancaria,
    contatos: ['123456789', '987654321']
}

correntista.contaBancaria.depositar(3000)

//----------- TS -----------
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string,
    contaBancaria2: ContaBancaria,
    contatos: string[]
}

let contaBancaria2: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number): void {
        this.saldo += valor
    }
}

let correntista2: Correntista = {
    nome: 'Bia Silva',
    contaBancaria2,
    contatos: ['123456789', '987654321']
}

correntista2.contaBancaria2.depositar(3000)
console.log(correntista2)
