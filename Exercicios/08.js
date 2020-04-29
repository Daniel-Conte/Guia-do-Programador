const pontuacoes = '30, 40, 20, 4, 51, 25, 42, 38, 56, 7'

function avaliacao(pontuacao) {
    let valores = pontuacao.split(', ')

    for(let i = 0; i < valores.length; i++) {
        valores[i] = parseInt(valores[i])
    }

    let quebraRecorde = 0
    let piorJogo = 1
    let maior = valores[0]
    let menor = valores[0]

    for(i = 0; i < valores.length; i++) {
        if(valores[i] > maior) {
            maior = valores[i]
            quebraRecorde++
        } else if(valores[i] < menor) {
            menor = valores[i]
            piorJogo = (i + 1)
        }
    }

    return [quebraRecorde, piorJogo]
}

console.log(avaliacao(pontuacoes))