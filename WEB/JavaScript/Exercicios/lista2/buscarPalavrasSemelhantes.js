function buscarPalavrasSemelhantes(procurar, palavras) {
    const regex = new RegExp(`.*${procurar}.*` , 'g')

    return palavras.filter(palavra => palavra.match(regex))
}

console.log(buscarPalavrasSemelhantes('pro', ['programação', 'mobile', 'profissional']))
console.log(buscarPalavrasSemelhantes('python', ['javascript', 'java', 'c++']))