function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), tempo)
    })
}

async function executar() { // Transformou a função em assíncrona, então vai executar tudo ao mesmo tempo
    await esperarPor(1500) // Usando o "await" pra esperar essa linha ser executada pra ir para a próxima, imitando uma função síncrona
    console.log('Async/Await 1...')

    await esperarPor(1500)
    console.log('Async/Await 2...')

    await esperarPor(1500)
    console.log('Async/Await 3...')
}

executar()