const texto = '.$+*?-'

// Dentro de um conjunto QUASE todos os Meta-caracteres são lidos de forma LITERAL
// Então não precisa usar "\"(escape)
// Meta-caracteres que precisam usar "\"(escape) dentro de um conjunto: "-", "[]", "^"

console.log(texto.match(/[+.?*$]./g)) // Procura os caracteres definidos. O "." está fora do conjunto, então ele é um meta-caractere
console.log(texto.match(/[$-?]/g)) // Procura os caracteres entre esses segundo o código da tabela Unicode

// NÃo é intervalo
console.log(texto.match(/[$\-?]/g)) // "\"(escape) está lendo "-"(intervalo) de forma literal
console.log(texto.match(/[-?]/g)) // "-"(intervalo) só funciona ENTRE 2 caracteres, caso contrário, é lido de forma LITERAL