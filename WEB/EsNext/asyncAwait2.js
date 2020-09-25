function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), tempo)
    })
}

function retornarValor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10)
        }, tempo);
    })
}

async function retornarValorRapido() {
    return 20
    // Já que a função é assíncrona, ela retorna uma Promise
        // Então nesse caso não precisa instanciar uma Promise
}

async function executar() { // Transformou a função em assíncrona, então vai executar tudo ao mesmo tempo
    let valor = await retornarValorRapido() // Espera a função ser executada para armazenar o valor

    await esperarPor(1500) // Usando o "await" pra esperar essa linha terminar de ser executada pra ir para a próxima, imitando uma função síncrona
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 3}...`)

    return valor + 3
}

// Como manipular o valor retornado da função?

    //const val = await executar()
        // ERRADO! "await" não pode ser usado fora de uma função assíncrona

    //const val = executar()
        // ERRADO! Vai armazenar uma "Promise pendente"

    //executar().then(v => console.log(v))
        // CERTO! Para manipular valores de funções assíncronas fora de uma é usando ".then()"
    
    // Outra forma
    async function executarDeVerdade() {
        let valor = await executar()
        // Já que está dentro de uma função assíncrona "await" é permitido
        console.log(valor)
    }
    executarDeVerdade()