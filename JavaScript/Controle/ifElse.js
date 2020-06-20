const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado.')
    }
}

imprimirResultado(8)
imprimirResultado(6)
imprimirResultado('Epa!')       //cuidado! "Else" usa qualquer valor e qualquer tipo que nao for o da expressao. Fracamente Tipada