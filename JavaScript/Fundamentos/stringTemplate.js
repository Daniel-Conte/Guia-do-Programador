const nome = "Rebeca"
const concatenacao = 'Olá ' + nome + '!'
const template = (`
    Olá                 
    ${nome}!`) //O texto entre ` `(crases) pode ser usado para quebrar a linha. Entre " " nao pode. ${} é usado para concatenar nesse tipo de string
console.log(concatenacao, template)

//expressoes
console.log(`1 + 1 = 2`) //usando a "string template" pode-se escrever operações como "string" sem processamento
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //atribui uma funcao à constante "up". Nesse caso de "Caixa Alta"
console.log(`Ei... ${up('cuidado')}!`) //para converter em caixa alta é só colocar o texto desejado dentro da funcao (concatenada). Nesse caso "up()"