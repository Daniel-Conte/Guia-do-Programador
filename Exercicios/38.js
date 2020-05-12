function intervalo(inicio = 0, fim = 100) {
    if(inicio > fim) {
        aux = fim
        fim = inicio
        inicio = aux
    }
    for(let i = inicio; i <= fim; i++) {
        if(i % 2 != 0) {
            console.log(i)
        }
    }
}

intervalo(20, 10)