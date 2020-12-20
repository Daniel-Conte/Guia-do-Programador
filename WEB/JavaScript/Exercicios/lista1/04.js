function divisao(dividendo, divisor) {
    return `    Divisão = ${dividendo / divisor}
    Divisão inteira = ${Math.floor(dividendo / divisor)}
    Resto ${dividendo % divisor}`
}

console.log(divisao(14, 5))