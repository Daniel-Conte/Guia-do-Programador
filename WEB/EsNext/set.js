// Estrutura que não aceita repetição e os elementos não tem índice
const times = new Set()
times.add('Vasco') //Adiciona um novo elemento
times.add('São Paulo').add('Palmeiras').add('Corinthians') //Pode adicionar encadeamente
times.add('Flamengo')
times.add('Vasco') //Não vai adicionar pois está repetido

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) //O nome precisa ser igual
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes) //Vai remover o último "Lucas" pois está repetido
console.log(nomesSet)