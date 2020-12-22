function somarNumeros(elementos) {
    return elementos.reduce((acumulador, atual) => acumulador + atual, 0)
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))