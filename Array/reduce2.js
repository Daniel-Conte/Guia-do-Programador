const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

const bolsa = a => a.bolsista

//Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (anterior, atual) => anterior && atual //Se os 2 for "true" retorna "true", senao retorna "false"
console.log(alunos.map(bolsa).reduce(todosBolsistas))

//Desafio 2: Algum aluno é bolsista?
const algumBolsista = (anterior, atual) => anterior || atual //Se um for "true" retorna "true", se os 2 forem "false" retorna "false"
console.log(alunos.map(bolsa).reduce(algumBolsista))