const texto = 'Você precisa responder sim, não ou não sei!'
console.log(texto.match(/sim|não sei|não/g)) // "|"(pipe) alternativa(OU)
// Para achar "não sei" é preciso posicionar antes do "não"