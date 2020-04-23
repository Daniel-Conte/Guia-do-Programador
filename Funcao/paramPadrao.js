//estrategia 1 para gerar valor padrao
function soma1(a, b, c) {
    a = a || 1          //caso "a" for "falso" vai ser atribuido o valor "1"
    b = b || 1          //esse metodo é muito usado
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))      //"0" é passado como "falso" entao é atribuido o valor padrao

//estrategia 2, 3, 4 para gerar valor padrao
function soma2(a, b, c) {
    a = a !== undefined ? a : 1     //se "a" for !== de "undefined", recebe "a", senao recebe "1"
    b = 1 in arguments ? b : 1      //se o indice 1 existir em arguments, "b" recebe "b", senao recebe "1"
    c = isNaN(c) ? 1 : c            //se "c" nao for um numero, recebe "1", senao recebe "c"        Esse metodo é o mais seguro caso nao use ES2015
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrao do ES2015
function soma3(a = 1, b = 1, c = 1) {       //melhor metodo para usar
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))