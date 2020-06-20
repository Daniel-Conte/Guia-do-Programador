function concatenar() {
    let resultado = []
    for(let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

const vetorInteiro = [1, 2, 3, 4]
const vetorString = ["Legal", 'Nice', 'Bueno', 'Boa']
const vetorDouble = [5.5, 4.6, 7.9, 8.3]

console.log(concatenar(vetorInteiro, vetorString))
console.log(concatenar(vetorString, vetorDouble))