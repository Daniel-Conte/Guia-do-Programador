"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("../Classes/classes");
//----------------------- Generics -----------------------
// Generics basicamente é um tipo genérico que infere um tipo baseado no valor passado, diferente do "any"(que aceita qualquer coisa)
// Usando "any"
function echo(objeto) {
    // Pode receber qualquer coisa e vai retornar qualquer coisa, sem se preocupar com qual tipo seja
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27).length);
// ".length" não pode ser usado em valores tipo "number", porém o TS não acusou erro na sintaxe
// Isso acontece por causa do "any"
console.log(echo({ nome: 'João', idade: 27 }));
// Usando generics
// "<NOME>", pode ser qualquer nome
function echoMelhorado(objeto) {
    // O que vai acontecer é que o generics "<T>" vai pegar o tipo do valor passado para a função quando invocada, então ele passa a ser usado como um tipo dentro da função
    // O "T" é só convenção, pode ser qualquer nome
    // Simplificando, o "T" é uma variável que guarda o tipo do valor que foi passado pra função e usa esse tipo no escopo da função, assim em cada chamada desta função o "T" pode ser tipos diferentes(depende de cada chamada)
    return objeto;
}
console.log(echoMelhorado('João').length);
// Como foi passado um valor do tipo "string", o generics "T" passa ser do tipo "string" no escopo desta chamada de função
// Já que o retorno da função é do tipo "string" e não "any", o TS consegue identificar e mostra que métodos podem ser chamados após a função
//console.log(echoMelhorado(27).length)
// Como foi passado um valor do tipo "number", o generics "T" passa ser do tipo "number" no escopo desta chamada de função
// Já que o retorno da função é do tipo "number", o TS não permite usar ".length" e lança um erro
console.log(echoMelhorado(27));
// Ao definir um generics na chamada da função, você está inferindo o tipo do "T" de forma explícita e antecipada
// Ou seja, nesta chamada de função o "T" será o tipo "number", e a função não aceitará um valor com outro tipo
// Se não definir de forma explícita, o TS infere o tipo de acordo com o tipo do valor passado pra função
// Assim, a função aceita um valor de qualquer tipo, pois o generics não foi inferido de forma explícita e antecipada
console.log(echoMelhorado({ nome: 'João', idade: 27 }));
//----------------------- Array -----------------------
var avaliacoes = [10, 9.3, 7.7];
// Usando generics dessa maneira é igual a usar "number[]"
// "number[]" é um shorthand de "Array<number>"
avaliacoes.push(8.4);
//avaliacoes.push('5.5')
console.log(avaliacoes);
function imprimir(args) {
    // Definindo um array com tipo genérico, o tipo específico depende de cada chamada
    args.forEach(function (e) { return console.log(e); });
}
imprimir([1, 2, 3]);
// É inferido o tipo "number" para o generics
imprimir([1, 2, 3]);
// Inferindo explicitamente o tipo do generics
imprimir(['Ana', 'Bia', 'Carlos']);
imprimir([
    // Inferindo explicitamente um tipo de objeto
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
// Definindo um Alias para simplificar este tipo de objeto
// Mesmo exemplo da chamada de função anterior, porém simplificada por um ALias para o tipo do objeto
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
var chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
//----------------------- Múltiplos Generics -----------------------
function multiGenerics(p1, p2, p3) {
    // É possível utilizar vários generics
    // Para inferir o tipo de cada um, existem 2 opções:
    // Pelos parâmetros: Atribuindo cada generics para cada parâmetro, assim o tipo do valor passado para tal parâmetro será o tipo de tal generic
    // Inferindo explicitamente: Inferir o tipo de cada generic na chamada da função
    console.log(p1);
    console.log(p2);
    console.log(p3);
}
multiGenerics(1, true, 'asdasd');
// Inferindo o tipo dos generics pelos parâmetros
multiGenerics(false, 'aaaaa', 5);
// Inferindo o tipo dos generics de forma explícita
//----------------------- Classes -----------------------
var OperacaoBinaria = /** @class */ (function () {
    // A definição do generics vai após o nome da classe
    function OperacaoBinaria(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    return OperacaoBinaria;
}());
var SomaBinaria = /** @class */ (function (_super) {
    __extends(SomaBinaria, _super);
    function SomaBinaria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Neste caso é necessário inferir o tipo dos generics de forma explícita
    SomaBinaria.prototype.executar = function () {
        return this.operando1 + this.operando2;
    };
    return SomaBinaria;
}(OperacaoBinaria));
console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(10, 45).executar());
// Desafio: Criar uma classe que recebe 2 datas e retorna uma string com a diferença de dias
var DiferencaDatas = /** @class */ (function (_super) {
    __extends(DiferencaDatas, _super);
    function DiferencaDatas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiferencaDatas.prototype.executar = function () {
        var t1 = this.dataParaMilissegundos(this.operando1);
        var t2 = this.dataParaMilissegundos(this.operando2);
        var diferenca = Math.abs(t1 - t2);
        // "Math.abs(<expressao>)" retorna o valor absoluto (sempre positivo)
        var dias = Math.ceil(diferenca / 86400000);
        // Transforma milissegundos em dias
        return dias + " dia(s)";
    };
    DiferencaDatas.prototype.dataParaMilissegundos = function (data) {
        var dia = data.dia, mes = data.mes, ano = data.ano;
        return new Date(ano, mes, dia).getTime();
    };
    return DiferencaDatas;
}(OperacaoBinaria));
// Usando a classe "Data" do arquivo "classes.ts"
var data1 = new classes_1.Data(1, 0, 2021);
var data2 = new classes_1.Data(1, 0, 2022);
console.log(new DiferencaDatas(data1, data2).executar());
//----------------------- Restrições(Constraints) -----------------------
// É possível passar restrições para o generics usando "extends", assim é possível permitir que somente alguns tipos passem
// É possível passar tipos, interfaces, elementos fixos...
// Ao usar restrições, é preciso inferir explicitamente o tipo do generic na chamada, senão pode dar alguns bugs
var Fila = /** @class */ (function () {
    // Somente valores do tipo "number", "string" e suas subclasses são aceitos
    function Fila(fila) {
        this.fila = fila;
    }
    Fila.prototype.entrar = function (elemento) {
        this.fila.push(elemento);
    };
    Fila.prototype.proximo = function () {
        return this.fila.shift();
    };
    Fila.prototype.imprimir = function () {
        console.log(this.fila);
    };
    return Fila;
}());
var f1 = new Fila(['Ana', 'João', 'Bia', 'Pedro']);
// Ao usar restrições, é preciso inferir explicitamente o tipo do generic na chamada
f1.imprimir();
console.log(f1.proximo());
f1.imprimir();
console.log(f1.proximo());
f1.entrar('Marta');
f1.imprimir();
var f2 = new Fila([1, 2, 3, 4]);
f2.imprimir();
console.log(f2.proximo());
f2.imprimir();
console.log(f2.proximo());
f2.entrar(5);
f2.imprimir();
function retornarValor(obj, chave) {
    // "K extends keyof T" significa que o generic "K" só vai aceitar as chaves que estão presentes no generic "T"
    return obj[chave];
}
var objeto = {
    a: 1,
    b: 2,
    c: 3
};
console.log(retornarValor(objeto, 'a'));
var Mapa = /** @class */ (function () {
    function Mapa() {
        this.itens = [];
    }
    Mapa.prototype.obter = function (chave) {
        var resultado = this.itens.filter(function (item) { return item.chave === chave; });
        return resultado ? resultado[0] : null;
    };
    Mapa.prototype.colocar = function (novoItem) {
        var existe = this.obter(novoItem.chave);
        if (existe) {
            existe.valor = novoItem.valor;
        }
        else {
            this.itens.push(novoItem);
        }
    };
    Mapa.prototype.limpar = function () {
        this.itens = new Array();
        // Ou
        //this.itens.splice(0)
    };
    Mapa.prototype.imprimir = function () {
        console.log(this.itens);
    };
    return Mapa;
}());
var mapa = new Mapa();
mapa.imprimir();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
mapa.imprimir();
console.log(mapa.obter(1));
console.log(mapa.obter(2));
console.log(mapa.obter(3));
console.log(mapa.obter(7));
mapa.limpar();
mapa.imprimir();
