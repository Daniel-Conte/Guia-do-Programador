function gerarNumerosEntre(min, max) {
    if(min > max)
        [max, min] = [min, max] // Usando destructuring para inverter os valores
    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min) // Dá pra usar "parseInt" ou "Math.floor/round" para aredondar o valor gerado(é gerado com várias casas decimais)
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 50)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)