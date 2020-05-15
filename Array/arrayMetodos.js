const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] //const nao deixa atribuir nada, mas deixa modificar
pilotos.pop() //Remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona um elemento no final
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona um elemento no primeiro indice
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //Pegou o indice 2 como referencia, não removeu nenhum elemento e adicionou 2 elementos a partir do indice 2
console.log(pilotos)

//remover
pilotos.splice(3, 1) //Pegou o indice 3 como referencia e excluiu 1 elemento a partir do 3 (excluiu o 3)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Cria um novo array com os elementos a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //Cria um novo array com os elementos dos indices 1 ate 3 (o 4 não conta)
console.log(algunsPilotos2)