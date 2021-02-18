"use strict";
//----------------------- Módulos -----------------------
// Para utilizar módulos e isolar-se do escopo global, basta utilizar o "export" para as funções/variáveis que deseja exportar e "import" para importar
// Tudo o que for exportado em 1 arquivo, fazerá parte daquele módulo e o que não for exportado fazerá parte do escopo global
// Os browsers não suportam o import/export (node suporta), então é preciso instalar a dependência "SystemJS" para funcionar
// Em apps reais utilizando algum framework ou webpack, não é necessário essa dependência
// "Módulos" é um padrão que utiliza 'módulos externos'/'arquivos separados'
// É melhor para aplicações grandes, oferece mais estabilidade
// "Namespaces" é um padrão que utiliza 'módulos internos'/'1 só arquivo'
// Forma mais obsoleta
Object.defineProperty(exports, "__esModule", { value: true });
var circunferencia_1 = require("./circunferencia");
// É possível criar um apelido para a função importada usando "as"
var retangulo_1 = require("./retangulo");
console.log(circunferencia_1.areaCircunferencia(10));
console.log(retangulo_1.areaRetangulo(5, 10));
