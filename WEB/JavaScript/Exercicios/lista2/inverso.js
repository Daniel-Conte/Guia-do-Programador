function inverso(valor) {
    switch(typeof valor) {
        case "boolean" : return !valor
        case "number" : return valor * -1
        default : return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
    }
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso('6'))
console.log(inverso(-2000))
console.log(inverso(1000))
console.log(inverso('programação'))