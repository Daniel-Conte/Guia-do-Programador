const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //Mostra os atributos dentro de um array
console.log(Object.values(pessoa)) //Mostra os valores dentro de um array
console.log(Object.entries(pessoa)) //Mostra os atributos e valores. Cada atributo e seu valor dentro de um array

Object.entries(pessoa).forEach(([ chave, valor ]) => { //Usando destructuring
    console.log(`${chave}: ${valor}`)
})

//Funcao para adicionar chaves e valores, porém com mais controle sobre elas
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //true -> vai ser listada quando chamada. false -> não vai ser listada quando chamada
    writable: false, //true -> pode ser modificada. false -> não pode ser modificada
    value: '01/01/2019' //valor da chave
})

pessoa.dataNascimento = '01/01/2017' //não pode ser modificada (writable: false)
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) //dataNascimento está listada (enumerable: true)

//Object.assign (ECMAScript 2015). concatena as chaves e valores de outros objs em um só
const dest = { a: 1}
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // "dest" vai receber os atributos dos objetos "o1" e "o2"
//se tiver objetos com chaves iguais, o ultimo obj concatenado vai sobrescrever o valor da chave. Nesse caso ("dest" a: 1, "o2" a: 4)

console.log(dest)
Object.freeze(obj)
obj.c = 1234
console.log(obj)