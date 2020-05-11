function adicionar(pilha, adiciona) {
    for(let i = 0; i < adiciona.length; i++) {
        console.log(adiciona[i])
        pilha.push(adiciona[i])
    }
    console.log(`Vetor adicionado: ${adiciona}
    Vetor resultado: ${pilha}`)
}

const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

adicionar(vetorPilha, vetorAdiciona)