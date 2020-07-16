function conceitos(notas) {
    let conceitos = []

    notas.forEach(nota => {
        if(nota < 5) { conceitos.push('D') }
        else if(nota < 7) { conceitos.push('C') }
        else if(nota < 9) { conceitos.push('B') }
        else if(nota <= 10) { conceitos.push('A') }
    })

    return conceitos
}

const notas = [3, 4.9, 5, 6.9, 7, 8.9, 9, 10]

console.log(conceitos(notas))