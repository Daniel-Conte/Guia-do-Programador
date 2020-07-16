function soNoticiaBoa(nota) {
    if(nota >= 7) {
        console.log('Aprovado com '+ nota)
    }
}

soNoticiaBoa(7)
soNoticiaBoa(5.5)

function seForVerdadeEuFalo(valor) {
    if(valor) {                         //quando so tem 1 variavel na expressao ela é convertida em true/false
        console.log('É verdade...'+ valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})