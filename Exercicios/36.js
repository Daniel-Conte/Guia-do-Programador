function mult1(vetor, num) {
    let resultado = []

    vetor.forEach(elemento => resultado.push(elemento * num))
    console.log(`Resultado 1: ${resultado}`)
}

function mult2(vetor, num) {
    let resultado = []
    
    vetor.forEach(elemento => {
        if(elemento > 5) {
            resultado.push(elemento * num)
        }
    })
    console.log(`Resultado 2: ${resultado}`)
}

const vetorInt = [1, 5, 3, 8, 10, 2]

mult1(vetorInt, 5)
mult2(vetorInt, 5)