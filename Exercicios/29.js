function intervalo(vetor) {
    let dentro = 0
    let fora = 0

    for(let i = 0; i < vetor.length; i++) {
        if((vetor[i] >= 10) && (vetor[i] <= 20)) {
            dentro++
        } else {
            fora++
        }
    }
    console.log(dentro)
    console.log(fora)
}

const vetor = [8, 9, 10, 11, 12, 20, 21, 22, 23]

intervalo(vetor)