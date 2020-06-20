console.log(soma(3, 4))     //function declaration pode ser usada antes da declaracao (o interpretador js carrega todas as funcoes antes de executar o codigo)
//console.log(sub(3, 4))    //function expression nao pode ser usada antes da declaracao (pois esta atribuida a uma variavel que nao foi declarada)
//console.log(mult(3, 4))   //named function expression nao pode ser usada antes da declaracao (pois esta atribuida a uma variavel que nao foi declarada)

//function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function(x, y) {        //se usar "var" funciona o "hoisting" (e pode ser usada antes da declaracao)
    return x - y
}
console.log(sub(3, 4))

//named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))