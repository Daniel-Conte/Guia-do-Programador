function receberPrimeiroEUltimoElemento(elementos) {
    return [elementos.shift(), elementos.pop()]
}

console.log(receberPrimeiroEUltimoElemento([7, 14, 'olá']))
console.log(receberPrimeiroEUltimoElemento([-100, 'aplicativo', 16]))