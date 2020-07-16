const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

console.log(alunos.map(a => a.nota))

//Reduce retorna um só valor de acordo com os criterios. Nesse caso somando todos os elementos do array
//Callback(valorAnterior, valorAtual, indice, array), valorInicial
const resultado = alunos.map(a => a.nota).reduce(function(acumulador,  atual) { //acumulador = valor anterior.
    console.log(acumulador, atual) 
    return acumulador + atual
}, 0) //O "0" é o valor inicial. A funcao começa com esse valor

console.log(resultado)