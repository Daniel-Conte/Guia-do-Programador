//tagged Template - Processa a template string dentro de uma funcao
function tag(partes, ...valores) {
    console.log(partes) //"partes" pega todos os caracteres que não são valores("${}") e coloca dentro de um array. Cada elemento é separado por um valor("${}")
    console.log(valores) //"valores" pega todos os valores("${}") e coloca dentro de um array. Cada valor é um elemento
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}!`) //Não se usa "()" para delimitar a string