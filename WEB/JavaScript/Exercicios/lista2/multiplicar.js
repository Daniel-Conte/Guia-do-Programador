function multiplicar(num1, num2) {
    if(num1 === 0 || num2 === 0) return 0

    let resultado = 0
    const menor = Math.min(num1, num2)
    const maior = Math.max(num1, num2)

    for(let i = 0; i < menor; i++) {
        resultado += maior
    }

    return resultado
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))