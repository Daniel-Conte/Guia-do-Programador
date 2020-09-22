function gerarNumerosEntre(min, max, tempo) {
    if(min > max)
        [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(() => {
            const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
            resolve(aleatorio)
        }, tempo);
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        // "Promise.all(<arrayPromises>)" recebe um array de promises e retorna um array com os resultados de cada uma
            // Retorna somente quando todas forem resolvidas ou rejeitadas
            // Já que são assíncronas, todas são executadas ao mesmo tempo
        gerarNumerosEntre(1, 60, 2000),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 1500),
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 100),
    ])
}

console.time('promise')
    // "console.time(<label>)" cria uma referência para visualizar o tempo de execução
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise') // "console.timeEnd(<label>)" mostra quanto demorou para executar em referencia à criação da label
    })