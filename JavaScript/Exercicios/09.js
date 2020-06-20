function classificacao(nota) {
    let notacorrigida = arredondamento(nota)
    if(notacorrigida >= 40) {
        console.log('Aprovado com nota', notacorrigida)
    } else {
        console.log('Reprovado com nota', notacorrigida)
    }
}

function arredondamento(nota) {
    if(nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificacao(100)
classificacao(30)
classificacao(38)
classificacao(88)
classificacao(61)