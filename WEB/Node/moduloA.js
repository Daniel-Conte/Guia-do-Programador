//Node é um sistema de módulos. Cada arquivo é um modulo diferente(Um sistema fechado)

//Formas(pouco usadas) para tornar atributos publicos(exportar), para poder acessar fora desse modulo
this.ola = 'Fala Pessoal'   //"this" é um objeto vazio. Aqui é add um atributo(ola) e um valor('Fala Pessoal') que são publicos
exports.bemVindo = 'Bem vindo ao node!' //O mesmo acontece com esses 2 exemplos
module.exports.ateLogo = 'Até próximo exemplo'

//Não importa qual forma voce use para exportar. Tudo estara no mesmo objeto