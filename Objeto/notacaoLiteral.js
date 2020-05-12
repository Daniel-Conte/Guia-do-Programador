const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c } //O nome da variavel se torna o nome do atributo. Forma mais reduzida
console.log(obj1, obj2) //Os 2 são iguais

const nomeAtrrib = 'nota'
const valorAtrrib = 7.87

const obj3 = {}
obj3[nomeAtrrib] = valorAtrrib  //Outra maneira de tornar o nome da variavel em nome do atributo
console.log(obj3)

const obj4 = { [nomeAtrrib]: valorAtrrib }
console.log(obj4)

const obj5 = {
    funcao1: function() {   //Modo antigo de funcao dentro de obj
        //...
    },
    funcao2() {     //Modo novo de funcao dentro de obj
        //...
    }
}
console.log(obj5)