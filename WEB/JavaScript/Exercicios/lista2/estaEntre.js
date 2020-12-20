function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if(inclusivo) {
        return numero >= minimo && numero <= maximo
    } else {
        return numero > minimo && numero < maximo
    }
}

console.log(estaEntre(50, 10, 100))
console.log(estaEntre(160, 16, 100))
console.log(estaEntre(3, 3, 150))
console.log(estaEntre(3, 3, 150, true))