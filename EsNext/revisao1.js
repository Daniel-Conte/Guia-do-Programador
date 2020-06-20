//let e const
{
    var a = 2 //var tem escopo de funcao e global
    let b = 3 //let tem escopo de bloco, funcao e global
    console.log(b)
}
console.log(a)

//Template String
const produto = 'iPad'
console.log(`${produto}
é
caro!`)

//Destructuring
const [l, e, ...tras] = 'Cod3r' //Desmembra a palavra. "l" pega a primeira letra, "e" a segunda e "...tras" coloca o resto dentro de um array (operador rest"...")
console.log(l, e, tras)

const [x, , y] = [1, 2, 3] //Atribui os valores às variaveis respectivamente
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 } //":" renomeia a variavel
console.log(i, nome)