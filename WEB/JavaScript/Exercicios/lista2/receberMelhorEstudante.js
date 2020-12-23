function receberMelhorEstudante(alunos) {
    const medias = Object.values(alunos).map(nota => nota.reduce((acumulador, atual) => acumulador + atual, 0) / 4)
    const maiorMedia = Math.max(...medias)
    const aluno = Object.keys(alunos)[medias.indexOf(maiorMedia)]

    return { nome: aluno, media: maiorMedia }
}

console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}))