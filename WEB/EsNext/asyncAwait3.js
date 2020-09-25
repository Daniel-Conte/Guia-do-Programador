function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) [max, min] = [min, max]
    
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * max - min + 1) + min

        if(numerosProibidos.includes(aleatorio)) {
            // ".includes(<elemento>)" verifica se o elemento está ou não no array
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()) { // Esse "for" é só pra percorrer um determinado número de vezes
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros

    } catch(e) {
        if(tentativas > 10) {
            throw "Não deu certo!"
        } else {
            return gerarMegaSena(qtdNumeros, tentativas + 1) // Fica incrementando a cada chamada
        }
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)