//Arrow Function
const soma = (a, b) => a + b //return implícito. Sempre é anônima
console.log(soma(2, 3))

//Arrow Function (this)
const lexico1 = () => console.log(this === exports) //this aponta para o exports. Fora da arrow ele aponta pro global. A arrow function trava o this dentro dela
const lexico2 = lexico1.bind({}) //Continua apontado pro exports pq lexico1 é uma arrow function
lexico1()
lexico2()

//parametro default
function log(texto = 'Node') { //Caso não for passado nenhum parametro, assume o valor padrao
    console.log(texto)
}
log()
log('Sou mais forte!')

//Operador Rest
function total(...numeros) { //Pega todos os parametros passados e bota dentro de um array
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))