function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R${valor.toFixed(2)}` //Verificacao. Se for número, será convertido para real
        resultado.push(partes[indice], valor)
    })
    resultado.push(partes[partes.length - 1]) //Pra adicionar o último elemento, pois o forEach não adiciona, já que "partes" tem mais elementos que "valores"
    return resultado.join('') //Junta tudo
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou de ${precoParcela}.`)