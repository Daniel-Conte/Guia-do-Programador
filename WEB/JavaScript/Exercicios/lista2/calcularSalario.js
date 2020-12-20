function calcularSalario(horas, valorPorHora) {
    const salario = horas * valorPorHora

    return `Salário igual a R$${salario}`
}

console.log(calcularSalario(150, 40.5))