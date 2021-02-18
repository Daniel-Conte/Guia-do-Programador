"use strict";
//----------- 1 -----------
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var dobro = function (valor) { return valor * 2; };
console.log(dobro(10));
//----------- 2 -----------
var dizerOla = function (nome) {
    if (nome === void 0) { nome = 'Pessoa'; }
    return console.log("Ol\u00E1, " + nome);
};
dizerOla();
dizerOla('Anna');
//----------- 3 -----------
var nums = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, nums));
//----------- 4 -----------
var numeros = [-3, 33, 38, 5];
var array = __spreadArrays([55, 20], numeros);
console.log(array);
//----------- 5 -----------
var notas = [8.5, 6.3, 9.4];
var nota1 = notas[0], nota2 = notas[1], nota3 = notas[2];
console.log(nota1, nota2, nota3);
var cientista = {
    primeiroNome: 'Will',
    experiencia: 12
};
var primeiroNome = cientista.primeiroNome, experiencia = cientista.experiencia;
console.log(primeiroNome, experiencia);
