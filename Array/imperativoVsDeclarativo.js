const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo           // Se importa mais em COMO fazer do que O QUE fazer. Mais complicado de ler e pouco reusável (tudo junto)
let total1 = 0
for(let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Declarativo           // Se importa mais em O QUE fazer do que COMO fazer. Mais facil de ler e mais reusável(mais separado). !!!USE!!!
const getNota = e => e.nota
const soma = (total, atual) => total += atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)