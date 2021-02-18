"use strict";
//----------------------- Decorators -----------------------
// Decorators servem para adicionar/alterar comportamentos onde são aplicados
// Basicamente são funções normais que recebem como parâmetro os atributos de onde serão aplicados
// Existem vários tipos de decorators, cada um sendo específico para o lugar onde será chamado
// Existem os tipos: classe, método, getter & setter, atributo
// O que diferencia cada tipo são os parâmetros que a função do decorator irá receber
// Os decorators são chamados em tempo de execução
// Ex: Um decorator de classe é chamado quando a classe é carregada
// A classe NÃO precisa ser instanciada
// O decorator NÃO é chamado a cada instância
// Para usar um decorator, basta chamá-lo na linha acima de onde quer aplicá-lo
// "@<nomeDoDecorator>"
// "class Teste {}"
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Decorators são criados como funções normais
function logarClasse(construtor) {
    // Decorators de classe recebem o construtor da classe onde foram aplicados como parâmetro
    console.log(construtor);
}
// A chamada dos decorators deve ser logo acima de onde deseja aplicá-lo
// Os parâmetros são passados internamente
var Eletrodomestico = /** @class */ (function () {
    function Eletrodomestico() {
        console.log('Novo...');
    }
    Eletrodomestico = __decorate([
        logarClasse
    ], Eletrodomestico);
    return Eletrodomestico;
}());
// Mesmo instanciando várias vezes, o decorator só executa quando a classe é carregada
new Eletrodomestico();
new Eletrodomestico();
new Eletrodomestico();
//----------------------- Decorator Factory -----------------------
// Decorators factory são funções do tipo factory que retornam um decorator
// São usados para personalizar o decorator com parâmetros livres
// São passados quaisquer parâmetros para a função principal para fazer algo personalizado, mas a função deve retornar um decorator
// Retorna o decorator de acordo com a condição
function logarClasseSe(valor) {
    // Definindo parâmetros personalizados
    return valor ? logarClasse : decoratorVazio;
    // Decorators factory SEMPRE devem retornar um decorator(não pode retornar 'null')
    // Neste caso, se a condição for "false", será retornado um decorator vazio(para não retornar um valor 'null')
}
function decoratorVazio(_) { }
function decorator(a, b) {
    return function (_) {
        console.log(a + " " + b);
    };
}
// Decorators factory recebem parâmetros personalizados
// Os parâmetros do decorator retornado, são passados internamente
//@logarClasseSe(true)
var Teste = /** @class */ (function () {
    function Teste() {
        console.log('Teste...');
    }
    Teste = __decorate([
        decorator('Decorator', 123)
    ], Teste);
    return Teste;
}());
// Este é um tipo específico que será preciso para o exemplo abaixo
// Este é um tipo que exige um OBJETO com um CONSTRUTOR, ou seja, exige uma classe
// "(...args: any[])" é a forma mais genérica possível para aceitar todos os parâmetros passados pra uma função
// Usa o operador Rest pra armazenar tudo em um array do tipo "any"
// O "new" na frente da função significa que esta função deve ser um construtor
// Este decorator vai substituir a classe 'decorada' por uma subclasse que herda a classe decorada
// A subclasse continua com o mesmo nome da classe decorada
// O decorator é executado somente uma única vez, o que acontece aqui é que o decorator substitui a classe decorada por uma subclasse, a subclasse será executada a cada instância(pois ela se tornou a classe original, então é o comportamento padrão de uma classe)
function logarObjeto(construtor) {
    // Tudo o que estiver acima do "return" será executado somente uma vez, pois não faz parte da classe substituta
    console.log('Carregando...');
    // O que estiver abaixo se tornará a nova classe que irá substituir a classe original
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        // Criando uma classe anônima que herda a classe decorada e a substitui
        // O nome continua o mesmo da classe pai
        // Esta é uma declaração de classe
        function class_1() {
            // Os parâmetros que a subclasse irá receber
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = this;
            // O que estiver ANTES do "super()" irá ser executado ANTES do construtor da classe pai
            console.log('Antes...');
            // Já que é uma classe filha com construtor, é preciso chamar o "super()" para enviar dados para a classe pai
            _this = _super.apply(this, args) || this;
            // Enviando todos os parâmetros recebidos para a classe pai
            // O que estiver DEPOIS do "super()" irá ser executado DEPOIS do construtor da classe pai
            console.log('Depois...');
            return _this;
        }
        return class_1;
    }(construtor));
}
// Como o parâmetro do decorator "logarObjeto" exige uma classe, não é necessário passar explicitamente, já é passado internamente(quando não é invocado "()")
var Imovel = /** @class */ (function () {
    function Imovel() {
        console.log('Execução do construtor da classe pai...');
    }
    Imovel = __decorate([
        logarObjeto
    ], Imovel);
    return Imovel;
}());
// Como o decorator substituiu a classe Imovel original, as instâncias da classe obedecerão à classe substituta
new Imovel();
new Imovel();
new Imovel();
//----------------------- Adicionando Função -----------------------
// Adicionando uma função no protótipo dos objetos que estão "decorados" com este decorator
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
        // Aqui o "this" está referenciando o objeto que chamou a função "imprimir"
    };
}
var Movel = /** @class */ (function () {
    function Movel() {
        console.log('Movel...');
    }
    Movel = __decorate([
        imprimivel
    ], Movel);
    return Movel;
}());
//new Movel().imprimir()
// Mesmo criando a interface, continua dando erro, pois o método pode ser "undefined" já que é opcional
// Então é necessário uma expressão pra validar o método
var mov = new Movel();
mov.imprimir && mov.imprimir();
// Decorators podem ser "empilhados" na mesma classe
var Predio = /** @class */ (function () {
    function Predio() {
        console.log('Vários decorators...');
    }
    Predio = __decorate([
        logarObjeto,
        imprimivel
    ], Predio);
    return Predio;
}());
var pred = new Predio();
pred.imprimir && pred.imprimir();
var usuarioLogado = {
    nome: 'Fulano',
    email: 'fulano@email.com',
    admin: true
};
//@perfilAdmin(usuarioLogado)
var MudancaAdministrativa = /** @class */ (function () {
    function MudancaAdministrativa() {
    }
    MudancaAdministrativa.prototype.critico = function () {
        console.log('Algo crítico foi alterado!');
    };
    MudancaAdministrativa = __decorate([
        perfilAdmin2
    ], MudancaAdministrativa);
    return MudancaAdministrativa;
}());
new MudancaAdministrativa().critico();
function perfilAdmin(usuario) {
    if (usuario.admin || usuario) {
        return decoratorVazio;
    }
    else {
        throw new Error('Sem permissão!');
    }
}
function perfilAdmin2(construtor) {
    // É preciso usar generics para o parâmetro não aceitar exclusivamente um construtor
    // Se não usar generics, o tipo "Construtor" irá aceitar somente o construtor da classe e não irá aceitar os métodos nela
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão!');
            }
            return _this;
        }
        return class_2;
    }(construtor));
}
//----------------------- Decorator de Métodos -----------------------
// Decorators de métodos servem para modificar o comportamento de métodos em uma classe
var ContaCorrente = /** @class */ (function () {
    function ContaCorrente(saldo) {
        this.saldo = saldo;
    }
    // Decorators de métodos são aplicados na linha acima de métodos
    ContaCorrente.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    };
    ContaCorrente.prototype.getSaldo = function () {
        return this.saldo;
    };
    __decorate([
        congelar
    ], ContaCorrente.prototype, "sacar", null);
    __decorate([
        congelar
    ], ContaCorrente.prototype, "getSaldo", null);
    return ContaCorrente;
}());
var cc = new ContaCorrente(10248.57);
cc.sacar(5000);
console.log(cc.getSaldo());
// Sobrescrevendo a função na classe
// Isso não pode acontecer
/* cc.getSaldo = function() {
    return this['saldo'] + 7000
}
console.log(cc.getSaldo()) */
// Criando um decorator de método para "congelar", não permitindo que o método seja sobrescrito
// A lógica do decorator de método é a mesma do decorator de classe, o que muda são os parâmetros recebidos e onde o decorator é aplicado
// Decorators de métodos recebem 3 parâmetros
// "alvo" é a classe onde o decorator foi aplicado
// "nomeMetodo" é o nome do método que foi decorado
// "descritor" é um objeto que contém algumas propriedades específicas
// "Object.defineProperty" do JS usa este descritor
function congelar(alvo, nomeMetodo, descritor) {
    console.log(alvo);
    console.log(nomeMetodo);
    descritor.writable = false;
    // Impede que o método(neste caso) seja alterado, torna 'somente leitura'
}
//----------------------- Decorator de Atributo -----------------------
// Decorators de atributo servem para modificar o comportamento de atributos em uma classe
// Criando um decorator de atributo que substitui o atributo por um novo com getter & setter e impede que valores negativos sejam setados
// A lógica do decorator de atributo é a mesma do decorator de método e classe, o que muda são os parâmetros recebidos e onde o decorator é aplicado
// Decorators de atributos recebem 2 parâmetros
// "alvo" é a classe onde o decorator foi aplicado
// "nomePropriedade" é o nome do atributo que foi decorado
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    // Decorators de atributo não tem parâmetro do descritor, mas é possível acessar o descritor usando "Object.defineProperty"
    Object.defineProperty(alvo, nomePropriedade, {
        // Recriando o atributo com o mesmo nome, agora com getter & setter
        get: function () {
            return alvo["_" + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error('Saldo Inválido');
            }
            else {
                alvo["_" + nomePropriedade] = valor;
            }
        }
    });
}
var Conta = /** @class */ (function () {
    function Conta(credito) {
        this.credito = credito;
    }
    Conta.prototype.sacar = function (valor) {
        this.credito -= valor;
    };
    Conta.prototype.getCredito = function () {
        return this.credito;
    };
    __decorate([
        naoNegativo
    ], Conta.prototype, "credito", void 0);
    return Conta;
}());
var cnt = new Conta(10000);
console.log(cnt.getCredito());
cnt.sacar(3000);
console.log(cnt.getCredito());
//cnt.sacar(11000)
// Lança um erro ao tentar sacar um valor não disponível
console.log(cnt.getCredito());
//----------------------- Decorator de Parâmetro -----------------------
// Decorators de parâmetro servem para modificar o comportamento de parâmetros em um método
// Criando um decorator de parâmetro que mostra informações sobre o parâmetro
// A lógica do decorator de parâmetro é a mesma do decorator de método, classe e atributo, o que muda são os parâmetros recebidos e onde o decorator é aplicado
// NÃO é possível acessar o valor do parâmetro
// Decorators de parâmetros recebem 3 parâmetros
// "alvo" é método onde o decorator foi aplicado
// "nomeMetodo" é o nome do método que possui o parâmetro que foi decorado
// "indiceParam" é o índice do parâmetro
// Cada parâmetro em um método tem um índice de acordo com a sua ordem em relação aos outros parâmetros
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log("Alvo: " + alvo);
    console.log("M\u00E9todo: " + nomeMetodo);
    console.log("\u00CDndice Param: " + indiceParam);
}
var Parametro = /** @class */ (function () {
    function Parametro() {
    }
    // Decorators de parâmetro são aplicados na frente de parâmetros
    Parametro.prototype.registrar = function (nome, idade, email) {
        console.log(nome);
        console.log(idade);
        console.log(email);
    };
    __decorate([
        __param(0, paramInfo),
        __param(1, paramInfo),
        __param(2, paramInfo)
    ], Parametro.prototype, "registrar", null);
    return Parametro;
}());
new Parametro().registrar('fulano', 21, 'fulano@email.com');
