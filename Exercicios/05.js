function cortarCasas(valor) {
    return `R$0,${(valor.toFixed(2)) * 10}0`
}

console.log(cortarCasas(0.30000000000000004))