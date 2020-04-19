let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1     //qualquer caractere/string pode ser transformado em booleano. Basta adicionar "!" ou "!!" (negação) na frente
console.log(!!(isAtivo)) //com "!!" (negação * negação = true)
console.log(!(isAtivo)) //com "!" (negação = false)

console.log("Os VERDADEIROS...")
console.log(!!3)
console.log(!!-5) //qualquer numero diferente de 0 é convertido em "true"
console.log(!!' ') //espaços vazios = ""true"
console.log(!!'texto') //uma string = "true"
console.log(!![]) //array vazio = "true"
console.log(!!{}) //objeto = true
console.log(!!Infinity) //infinito = "true"
console.log(!!(isAtivo = true))

console.log("Os FALSOS...")
console.log(!!0) //0 = "false"
console.log(!!'') //string vazia = "false"
console.log(!!null) //nulo = "false"
console.log(!!NaN) //Not a Number = "false"
console.log(!!undefined) //indefinido = "false"
console.log(!!(isAtivo = false))

console.log("Para Finalizar...")
console.log(!!(''|| null || 0 || 'opa')) //1 true = "true"
console.log(''|| null || 0 || 'opa') //ignora todos os "false" e imprime só o primeiro "true"
console.log(''|| null || 0 || 'opa' || '123') //ignora todos os "false" e imprime só o primeiro "true"

let nome = '' //quando o nome recebido é vazio
console.log(nome || 'Desconhecido') //imprime o primeiro "true"

nome = 'Lucas' //quando recebe um nome
console.log(nome || 'Desconhecido')