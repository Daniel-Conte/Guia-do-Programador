"use strict";
//----------------------- Referenciando Arquivos -----------------------
/// <reference path="geometriaTrian.ts" />
// Referenciando/importando um "namespace" de outro arquivo .ts
// Deve-se usar 3 barras "///" no início
// Após referenciar os arquivos, deve-se executar o comando no terminal:
// Primeiro entre na pasta dos arquivos
// "tsc --outFile <nomeArqSaida>.js <nomeArqComAsReferencias>.ts"
// Irá gerar um único arquivo .js concatenando todos os arquivos .ts que foram referenciados
// Somente o arquivo .js gerado irá executar corretamente, se tentar executar o arquivo .ts irá dar erro
//----------------------- Namespaces -----------------------
// Namespaces servem basicamente para isolar variáveis e funções do escopo global, dividindo-as em grupos com funcionalidades parecidas
// Todos os arquivos TS compartilham o mesmo escopo global, 2 funções com o mesmo nome entram em conflito mesmo em arquivos diferentes, então é essencial sair do escopo global
var Areas;
(function (Areas) {
    // Criando um "namespace" que vai conter funções que calculam as áreas de objetos planos
    var PI = 3.14;
    function circunferencia(raio) {
        // Para ter acesso às funções e variáveis de fora do namespace, é preciso exportá-las
        return PI * Math.pow(raio, 2);
    }
    Areas.circunferencia = circunferencia;
    function retangulo(base, altura) {
        return base * altura;
    }
    Areas.retangulo = retangulo;
})(Areas || (Areas = {}));
var PI = 2.99;
// O namespace isola do escopo global, então não tem conflito de nomes iguais
// O acesso às funções do namespace é parecido com o acesso às funções estáticas em classes
console.log(Areas.circunferencia(10));
console.log(Areas.retangulo(10, 20));
console.log(PI);
//----------------------- Namespaces Aninhados -----------------------
// É possível aninhar e ter várias camadas de namespaces, assim as funções ficam mais organizadas e agrupadas de acordo com determinada área de funcionalidades
var Geometria;
(function (Geometria) {
    var Area;
    (function (Area) {
        // Namespaces aninhados devem ser exportados
        var PI = 3.14;
        function circunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.circunferencia = circunferencia;
        function retangulo(base, altura) {
            return base * altura;
        }
        Area.retangulo = retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
console.log(Geometria.Area.circunferencia(10));
console.log(Geometria.Area.retangulo(10, 20));
console.log(Geometria.Area.triangulo(10, 20));
// Veio de outro arquivo
