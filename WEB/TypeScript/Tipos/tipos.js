"use strict";
//----------- string -----------
var nome = 'João';
// Mesmo escrevendo um código JS puro, o TS infere automaticamente um tipo para a variável baseado no tipo do valor
console.log(nome);
//nome = 28
// Já que na variável "nome" já foi inferido o tipo "string", o TS não permite atribuir um valor de tipo diferente
// Mesmo com erro o TS traduz o código para JS, e no JS esse erro para de existir pois tem tipagem dinâmica, então o código é executado normalmente
// Para impedir isso, deve-se configurar o 'tsconfig.json'
//----------- number -----------
// JS e TS interpretam números Reais e Inteiros como sendo Number
var idade = 27;
//idade = 'Ana'
idade = 27.5;
console.log(idade);
//----------- boolean -----------
var possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
//----------- Tipagem dinâmica -----------
// Mesmo sendo TS, existe como inferir tipagem dinâmica
var minhaIdade;
// Caso a variável não seja inicializada, o TS infere o tipo "any" que pode ser atribuido valores de qualquer tipo
var minhaIdade2;
// Forma explícita para setar tipagem dinâmica
minhaIdade = 27;
minhaIdade = 'Idade 27';
console.log(minhaIdade);
//----------- Tipos implícitos -----------
var minhaIdade3;
// Para especificar o tipo da variável explicitamente: ": <tipo>"
minhaIdade3 = 27;
//minhaIdade3 = '27'
console.log(minhaIdade3);
//----------- Array -----------
// Para inferir o tipo array: ": <tipo>[]"
var hobbies = ['Cozinhar', 'Praticar Esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
//hobbies = 100
console.log(hobbies);
//----------- Tuplas -----------
// Tupla é um tipo de array com valores/tipos obrigatórios
// Para inferir o tipo tupla: ": [<tipo>, <tipo>, <tipo>, ...]"
var endereco = ["Av. Principal", 99, ""];
// O valor da variável precisa necessariamente ter a mesma quantidade de elementos e os tipos na ordem correta do tipo inferido
//endereco = [88, "Bloco A", ""]
//endereco = ["Av. Principal", 99]
console.log(endereco);
endereco = ["Rua importante", 1260, "Bloco C"];
console.log(endereco);
//----------- Enum -----------
// Enum é um tipo em que se pode definir valores pré-definidos
// Cada valor pré-definido retorna um número inteiro(caso não seja atribuido outro valor). O valor retornado é aumentado em 1 a cada elemento
// É possível passar valores string, mas então precisa inicializar todos os valores
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor["Verde"] = "dgdg";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Amarelo"] = 11] = "Amarelo";
    Cor[Cor["Laranja"] = 12] = "Laranja";
    Cor[Cor["Vermelho"] = 100] = "Vermelho"; // 100
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
minhaCor = Cor.Cinza;
console.log(minhaCor);
console.log(Cor.Laranja);
//----------- Funções -----------
function retornaMeuNome() {
    // Ao passar um tipo no final da função, está declarando que esta função só retorna string
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    // "void" significa que a função não irá retornar nada
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    // Declarando um tipo para cada parâmetro
    return numA * numB;
}
//console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.7, 9));
//----------- Tipo Função -----------
var calculo;
// Declara uma função como sendo o tipo
// O tipo função precisa ser uma Arrow Function
// A variável só irá receber funções que tenham os mesmos parâmetros(tipos) e retorno(tipo)
//calculo = 2
//calculo = digaOi
calculo = multiplicar;
console.log(calculo(5, 6));
//----------- Objetos -----------
var usuario = {
    // Declarando um tipo de objeto
    // O par chave/valor que este objeto irá receber deverão ter os mesmos nomes e tipos declarados no tipo
    // As chaves não precisam ser necessariamente na mesma ordem
    nome: 'João',
    idade: 27
};
console.log(usuario);
//usuario = { nome: 'Ana'}
//usuario = { name: 'Maria', age: 27 }
usuario = {
    idade: 27,
    nome: 'Maria'
};
console.log(usuario);
var funcionario = {
    supervisores: ['Adriano', 'Mateus', 'Ana'],
    baterPonto: function (horario) { return horario <= 8 ? 'Ponto normal' : 'Fora do horário'; }
};
var funcionário2 = {
    supervisores: ['Maria', 'Chico', 'Bárbara'],
    baterPonto: function (horario) { return horario <= 8 ? 'Ponto normal' : 'Fora do horário'; }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(7));
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
//----------- Union Types -----------
// Ao invés de declarar somente 1 tipo ou todos(any), é possível declarar tipos opcionais
var nota = 10;
// O valor pode ser do tipo "number" ou "string"
// É possível encadear mais tipos
console.log("Minha nota \u00E9 " + nota + "!");
nota = '10';
//nota = true
console.log("Minha nota \u00E9 " + nota + "!");
//----------- Tipo Never -----------
// É um tipo estranho, ele só pode ser usado em funções que nunca terminam ou que geram erro(pode ser usado em validações)
function infinito() {
    while (true) { }
    // Nunca acaba
}
function falha(msg) {
    throw new Error(msg);
    // Lança um erro
}
var produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
};
produto.validarProduto();
//----------- Null -----------
// Por padrão, o TypeScript não permite valores nulos para não gerar possíveis erros, mas há maneiras de possibilitar isso
var valorNulo = null;
// É meio que inútil declarar um tipo "null"
//valorNulo = 23
console.log(valorNulo);
var nulo = null;
// Se inicializar uma variável com valor nulo, será inferido o tipo "any"
console.log(nulo);
nulo = 24;
console.log(nulo);
var alturaOpcional = 12;
// É possível atribuir valores opcionais/nulos utlizando "union types"
console.log(alturaOpcional);
alturaOpcional = null;
console.log(alturaOpcional);
var contato1 = {
    nome: 'Fulano',
    tel1: '123456789',
    tel2: null
};
console.log(contato1);
//----------- Desafio -----------
// Traduzir de JS para TS
//----------- JS -----------
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['123456789', '987654321']
};
correntista.contaBancaria.depositar(3000);
var contaBancaria2 = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista2 = {
    nome: 'Bia Silva',
    contaBancaria2: contaBancaria2,
    contatos: ['123456789', '987654321']
};
correntista2.contaBancaria2.depositar(3000);
console.log(correntista2);
