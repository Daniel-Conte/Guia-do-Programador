const texto = 'Bom\ndia'

// "." Não substitui o "\n"(quebra de linha)
console.log(texto.match(/.../gi))
console.log(texto.match(/..../gi))

// Para resolver isso use a flag "s" que significa "dotall", aí o "." substitui tudo
console.log(texto.match(/./sgi))