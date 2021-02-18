"use strict";
// As classes no TS possuem mais recursos do que as classes no JS
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
exports.Data = void 0;
//----------------------- Classes -----------------------
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia,
            this.mes = mes,
            this.ano = ano;
    }
    return Data;
}());
exports.Data = Data;
var aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
var casamento = new Data;
casamento.ano = 2017;
console.log(casamento);
//-----------------------
// Um jeito mais curto para criar uma classe
// Um jeito mais curto de fazer a mesma coisa que a classe acima
var DataEsperta = /** @class */ (function () {
    // Sem criar atributos explícitos
    function DataEsperta(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return DataEsperta;
}());
var aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
var casamentoEsperto = new DataEsperta;
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
//-----------------------
var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    Produto.prototype.resumo = function () {
        return this.nome + " custa R$" + this.precoComDesconto() + " (" + this.desconto * 100 + "% off)";
    };
    Produto.prototype.precoComDesconto = function () {
        return this.preco * (1 - this.desconto);
    };
    return Produto;
}());
var prod1 = new Produto('Caneta BIC', 5.50);
console.log(prod1.resumo());
var prod2 = new Produto('Caderno do Batman', 25.75, 0.2);
console.log(prod2.resumo());
//----------------------- Herança -----------------------
var Carro = /** @class */ (function () {
    // Atributos e métodos privados não são herdados pela classe filho
    function Carro(marca, modelo, velocidadeMaxima) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 200; }
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        // Mesmo com modificador de acesso "private", é possível acessar esse atributo de fora da classe (mesmo com o TS gerando erros), pois no JS "private" não existe.
        // Então sempre configure o TS para não compilar quando há erros no código
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        // "protected" é um modificador de acesso que impede que o atributo/método seja acessado de fora da classe (igual ao "private"), porém, permite que o atributo/método seja herdado pela classe filho (ao contrário de "private")
        var novaVelocidade = this.velocidadeAtual + delta;
        var velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = novaVelocidade > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    };
    Carro.prototype.acelerar = function () {
        return this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        return this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro1 = new Carro('Ford', 'Ka', 185);
console.log(carro1.acelerar());
console.log(carro1.frear());
//-----------------------
var Ferrari = /** @class */ (function (_super) {
    __extends(Ferrari, _super);
    // Esta classe herda todos os atributos e métodos da classe pai(Carro) que não estejam com modificador de acesso "private"
    function Ferrari(modelo, velocidadeMaxima) {
        // Esta classe já é uma marca específica da classe "Carro", então é desnecessário passar a marca novamente em cada instância
        // Para resolver isso é criado um construtor somente com o modelo e a velocidade máxima como parâmetros, e a marca é passada para a classe "Carro" como valor fixo. Ao criar um construtor em uma classe filho, é necessário usar o método "super()"
        return _super.call(this, 'Ferrari', modelo, velocidadeMaxima) || this;
        // O método "super()" manda dados para a classe pai(Carro)
        // Os parâmetros passados são os mesmos do construtor da classe pai
    }
    // É possível modificar os métodos herdados
    Ferrari.prototype.acelerar = function () {
        return this.alterarVelocidade(20);
    };
    Ferrari.prototype.frear = function () {
        return this.alterarVelocidade(-15);
    };
    return Ferrari;
}(Carro));
var f40 = new Ferrari('F40', 324);
console.log(f40.marca + " " + f40.modelo);
console.log(f40.acelerar());
console.log(f40.frear());
//----------------------- Getters & Setters -----------------------
var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this._idade = 0;
    }
    Object.defineProperty(Pessoa.prototype, "idade", {
        // "_<atributo>" é uma convenção para nomes de atributos privados que serão acessados por meio de "Getters" e "Setters"
        // "Getters" são usados para acessar atributos privados fora da classe
        get: function () {
            return this._idade;
        },
        // "Setters" são usados para setar valores privados de fora da classe
        set: function (valor) {
            if (valor >= 0 && valor <= 120) {
                this._idade = valor;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
var pessoa1 = new Pessoa();
// "Getters" e "Setters" são acessados como atributos normais
pessoa1.idade = 10;
// Usando "Setter"
// O valor passado para o "Setter" deve ser atribuído e não passado como parâmetro de função
console.log(pessoa1.idade);
// Usando "Getter"
pessoa1.idade = -3;
// O valor não é aceito pois não passa pela condição do "Setter"
console.log(pessoa1.idade);
//----------------------- Membros Estáticos -----------------------
// Basicamente, atributos e métodos estáticos são membros que podem ser acessados SEM INSTANCIAR a classe
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.areaCirc = function (raio) {
        return Matematica.PI * (Math.pow(raio, 2));
        // Já que é estático e não será usado instâncias, dá pra acesar diretamente
    };
    Matematica.PI = 3.1416;
    return Matematica;
}());
// Se os membros não fossem estáticos, seriam utilizados assim:
/* const m1 = new Matematica()
console.log(m1.PI)
console.log(m1.areaCirc(4)) */
// Para acessar membros estáticos, basta acessá-los direto da classe
console.log(Matematica.PI);
console.log(Matematica.areaCirc(4));
// Exemplos de métodos estáticos que são muito utilizados
console.log(Math.max(1, 4, 2, 7, 3));
console.log(Math.min(1, 4, 2, 7, 3));
console.log(Math.pow(3, 2));
//----------------------- Classe Abstrata -----------------------
// São classes mais genéricas que servem para serem herdadas pelas classes filhas
// Não podem ser instanciadas
// Ex real: Você não pode ter um celular original/puro, você tem um celular de uma marca e de um modelo. Este celular puro é abstrato e contém as funcionalidades que todo celular tem, então, basicamente, os modelos de celular são classes filhas que herdam as funcionalidades da classe Celular
var Calculo = /** @class */ (function () {
    function Calculo() {
        // Não é possível instanciar esta classe, só é possível herdá-la
        this.resultado = 0;
    }
    // Métodos abstratos são métodos SEM CORPO em que as classes filhas DEVEM adicionar um corpo para o método (somente as classes "não-abstratas"/concretas)
    // Todas as classes filhas devem ter este igual método abstrato, somente o corpo pode ser diferente(cada classe cria o corpo conforme sua necessidade)
    Calculo.prototype.getResultado = function () {
        return this.resultado;
    };
    return Calculo;
}());
// Todas as classes filhas de Calculo herdam suas características
var Soma = /** @class */ (function (_super) {
    __extends(Soma, _super);
    function Soma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Soma.prototype.executar = function () {
        var numeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numeros[_i] = arguments[_i];
        }
        // Adicionando um corpo para o método abstrato herdado
        this.resultado = numeros.reduce(function (total, atual) { return total + atual; });
    };
    return Soma;
}(Calculo));
var Multiplicacao = /** @class */ (function (_super) {
    __extends(Multiplicacao, _super);
    function Multiplicacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multiplicacao.prototype.executar = function () {
        var numeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numeros[_i] = arguments[_i];
        }
        this.resultado = numeros.reduce(function (total, atual) { return total * atual; });
    };
    return Multiplicacao;
}(Calculo));
var c1 = new Soma();
// É possível usar uma classe abstrata como um tipo genérico(engloba todas as classes filhas)
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
// Pra isso que servem os métodos abstratos, todas as classes filhas tem o mesmo método, só com uma lógica diferente
console.log(c1.getResultado());
//----------------------- Singleton -----------------------
// "Singleton" é um padrão de projeto que basicamente é uma classe de UMA ÚNICA INSTÂNCIA para toda a aplicação, ou seja, em qualquer chamada desta classe em qualquer parte da aplicação, a instância é sempre a mesma
var Unico = /** @class */ (function () {
    // Cria a única instância desta classe que será usada em toda a aplicação
    // "private" para impedir que este atributo seja acessado de fora
    // "static" para poder acessar este atributo direto da CLASSE e não pela INSTÂNCIA DA CLASSE como é feito normalmente
    function Unico() {
    }
    // Construtor privado impede que a classe seja instanciada de fora
    Unico.getInstance = function () {
        // Este método sempre irá retornar a MESMA INSTÂNCIA desta classe (já que foi criada somente UMA e o construtor é privado)
        // Como é estático, é possível acessar de fora sem instanciar a classe
        return Unico.instance;
        // Já que o atributo "instance" é estático e será retornado sempre a MESMA INSTÂNCIA, é possível acessar diretamente da classe
    };
    // Os métodos e atributos que NÃO SÃO ESTÁTICOS, só podem ser acessados por meio de uma instância (como ocorre normalmente)
    // Então estes métodos SÓ podem ser acessados de fora por meio do método estático "getInstance()", pois ele retorna uma instância
    Unico.prototype.agora = function () {
        return new Date;
    };
    Unico.instance = new Unico;
    return Unico;
}());
//const errado = new Unico()
// Não é possível instanciar pois o construtor é privado
//const errado = Unico.agora()
// Não é possível acessar o método "agora()" sem instância, pois não é um método estático
// A ÚNICA MANEIRA de acessar um atributo ou método não-estático, é por meio do método estático "getInstance()", pois ele retorna uma instância
console.log(Unico.getInstance().agora());
//----------------------- Somente Leitura -----------------------
var Aviao = /** @class */ (function () {
    // O modificador de acesso "readonly" torna o atributo somente leitura, como se fosse uma constante
    function Aviao(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
    return Aviao;
}());
var turboHelice = new Aviao('Tu-114', 'PT-ABC');
//turboHelice.modelo = 'DC-8'
//turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice);
