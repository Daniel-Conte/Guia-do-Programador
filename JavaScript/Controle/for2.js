const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in notas) {           //"i" recebe os indices do array "notas" em ordem. Essa nao é a melhor maneira de fazer com arrays
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributos in pessoa) {
    console.log(`${atributos} = ${pessoa[atributos]}`)
}