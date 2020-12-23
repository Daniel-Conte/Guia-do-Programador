function segundoMaior(numeros) {
    const numerosDesc = numeros.sort((a, b) => b - a)
    
    return numerosDesc[1]
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))