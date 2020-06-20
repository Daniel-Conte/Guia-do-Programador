function cortarCasas(valor) {
    return `R$ ${valor.toFixed(2).replace(".", ",")}`
}

console.log(cortarCasas(0.30000000000000004))