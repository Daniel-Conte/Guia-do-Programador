function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(console.log)
    //.then(v => console.log(v), err => console.log(err))
        // Erros podem ser tratados no ".then()"
            // O segundo parâmetro do ".then()" é o tratamento de erro
    .catch(err => console.log(`Erro: ${err}`))
        // ".catch()" Faz o tratamento do "reject()" ou de um outro erro que ocorrer
            // Não recebe parâmetros dos ".then()" que estão acima e não passa parâmetros para baixo
            // Sempre é colocado por último
    .then(() => console.log('Fim!'))