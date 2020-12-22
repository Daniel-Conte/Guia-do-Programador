function calcularMedia(num) {
    const soma = num.reduce((acumulador, atual) => acumulador + atual, 0)

    return soma / num.length
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))