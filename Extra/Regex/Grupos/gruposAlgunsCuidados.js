const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC'

console.log(texto.match(/[(abc)]/gi))
    // Não é possível usar grupos dentro de um conjunto
    // Os parênteses serão lidos de forma literal

console.log(texto.match(/([abc])/gi))
    // É possível usar conjuntos dentro de um grupo