function trocarVetor(vetorA, vetorB) {
    if(vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++) {
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }

        console.log(`Novo Vetor A: ${vetorA}
        Novo Vetor B: ${vetorB}`)
    } else {
        console.log('Vetores com tamanhos diferentes')
    }
}

const vetorA = [1, 2, 3, 4, 5]
const vetorB = [6, 7, 8, 9, 10]

trocarVetor(vetorA, vetorB)