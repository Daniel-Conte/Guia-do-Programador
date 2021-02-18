"use strict";
//----------------------- Interfaces -----------------------
// Interfaces funcionam praticamente como tipos de objeto, onde o objeto deve seguir a estrutura da interface(o nome dos atributos deve ser igual)
// Interfaces são mais usadas num contexto de orientação a objetos, para definir "contratos"/"moldes"
function saudarComOla(pessoa) {
    console.log('Olá ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
var pessoa = {
    nome: 'João',
    idade: 27,
    saudar: function (sobrenome) {
        console.log("Ol\u00E1, meu nome \u00E9 " + this.nome + " " + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({ nome: 'Jonas' })
// Como "idade" é opcional, pode passar sem ela
//saudarComOla({ nome: 'Jonas', idade: 27 })
//saudarComOla({ nome: 'Jonas', idade: 27, xyz: true })
// O atributo dinâmico aceita qualquer atributo e qualquer valor
pessoa.saudar('Skywalker');
//----------------------- Usando Classes -----------------------
// Para utilizar uma interface em uma classe, basta utilizar o "implements"
// class <NomeClasse> implements <NomeInterface>
var Cliente = /** @class */ (function () {
    function Cliente() {
        // Precisa respeitar os atributos obrigatórios da interface, mas é possível adicionar atributos que não estão na interface
        this.nome = '';
        this.ultimaCompra = new Date;
        this.compras = ['Arroz', 'Feijão'];
    }
    // Adicionando atributos que não estão na interface
    Cliente.prototype.saudar = function (sobrenome) {
        console.log("Ol\u00E1, meu nome \u00E9 " + this.nome + " " + sobrenome);
    };
    return Cliente;
}());
var meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
// Como os atributos e tipos são compatíveis é possível usar
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
var potencia;
potencia = function (base, exp) {
    // Outras formas de calcular potência
    // Array(exp).fill(base).reduce((acc, atual) => acc * atual)
    // Math.pow(base, exp)
    return Math.pow(base, exp);
};
console.log(potencia(3, 10));
// Testando a herança
var RealA = /** @class */ (function () {
    function RealA() {
    }
    RealA.prototype.a = function () { };
    return RealA;
}());
var RealAB = /** @class */ (function () {
    function RealAB() {
    }
    RealAB.prototype.a = function () { };
    RealAB.prototype.b = function () { };
    return RealAB;
}());
var RealABC = /** @class */ (function () {
    function RealABC() {
    }
    RealABC.prototype.a = function () { };
    RealABC.prototype.b = function () { };
    RealABC.prototype.c = function () { };
    return RealABC;
}());
function teste(b) {
    b.b();
    console.log('Funcionou!');
}
teste(new RealABC);
// Mesmo o parâmetro da função sendo do tipo B e ao invocar está o tipo ABC, não dá erro, pois o tipo B é herança do tipo ABC
var AbstrataABD = /** @class */ (function () {
    function AbstrataABD() {
    }
    // Classes abstratas devem respeitar a estrutura das interfaces implementadas
    AbstrataABD.prototype.a = function () { };
    return AbstrataABD;
}());
Object.prototype.log = function () {
    console.log(this.toString());
};
var x = 2;
var y = 3;
var z = 4;
// Mesmo tendo adicionado a função "log" no prototype, continua dando erro
// Isso ocorre pois esta função não foi adicionada na interface "Object"
// Esse erro é somente do TS, o código JS gerado funciona normalmente pois no JS está certo
x.log();
y.log();
z.log();
var cli = {
    nome: 'Pedro',
    toString: function () {
        return this.nome;
    }
};
cli.log();
