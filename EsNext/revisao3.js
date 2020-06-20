//ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj)) //Pega só o valor
console.log(Object.entries(obj)) //Pega a chave e o valor. Dentro de uma matriz

//Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome, //Pega o nome da variável e bota como nome da chave e o valor da variavel como o valor do atributo
    ola() { //Forma mais simples de declarar funcoes dentro de objs
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal { //Define heranca
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())