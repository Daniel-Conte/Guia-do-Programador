function inverter(obj) {
    const inverso = {}

    Object.keys(obj).forEach(chave => {
        const valor = obj[chave]
        inverso[valor] = chave
    })

    return inverso
}   

console.log(inverter({a: 1, b: 2, c: 3}))