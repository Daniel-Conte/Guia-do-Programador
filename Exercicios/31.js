function negativos(vetor) {
    let negativo = 0

    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            negativo++
        }
    }
    console.log(negativo)
}
const vetor = [1, 4, -2, 6, -9, -5, 3, -10, 2, -8]

negativos(vetor)