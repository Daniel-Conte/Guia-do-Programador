function maiorMenor(vetor) {
    vetor.sort((a, b) => a < b ? 1 : -1)
    console.log(`Maior valor: ${vetor[0]}
    Menor valor: ${vetor[vetor.length - 1]}`)
}

const vetor = [6, 0, 9, 8, 1, 3]

maiorMenor(vetor)