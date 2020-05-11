function mediaAritmetica(vetor) {
    let media = 0
    let soma = 0

    for(let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    media = soma / vetor.length
    console.log(media.toFixed(2))
}

const vetor = [1, 5, 6, 8, 3, 9]

mediaAritmetica(vetor)