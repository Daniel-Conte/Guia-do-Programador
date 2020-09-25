/*
    - Um grupo é definido por "()"
    - É usado para agrupar uma determinada expressão para executar algum meta-caractere em cima dessa expressão
*/

const texto1 = 'O José Simão é muito engraçado... heheheheheheh'
console.log(texto1.match(/(he)+/g)) // Aplicando "+" em cima de "he" e não somente em "e"

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'
console.log(texto2.match(/(http:\/\/)?(w{3}\.)?[\w_]+\.\w{2,}(\.\w{2})?/g))