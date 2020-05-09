function contarCedulas(valor) {
    let notas100 = 0
    let notas50 = 0
    let notas10 = 0
    let notas5 = 0
    let notas1 = 0

    while(valor - 100 >= 0) {
        valor -= 100
        notas100++
    }
    while(valor - 50 >= 0) {
        valor -= 50
        notas50++
    }
    while(valor - 10 >= 0) {
        valor -= 10
        notas10++
    }
    while(valor - 5 >= 0) {
        valor -= 5
        notas5++
    }
    while(valor - 1 >= 0) {
        valor -= 1
        notas1++
    }

    if(notas100 > 0) {
        console.log(`Notas de R$100: ${notas100}`)
    }
    if(notas50 > 0) {
        console.log(`Notas de R$50: ${notas50}`)
    }
    if(notas10 > 0) {
        console.log(`Notas de R$10: ${notas10}`)
    }
    if(notas5 > 0) {
        console.log(`Notas de R$5: ${notas5}`)
    }
    if(notas1 > 0) {
        console.log(`Notas de R$1: ${notas1}`)
    }
}

contarCedulas(168)