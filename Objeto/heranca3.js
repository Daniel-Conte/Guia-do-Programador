const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) //Cria um objeto vazio já com o protótipo "pai"
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))//filha1 e filha2 só tem a chave "nome"
console.log(Object.keys(filha2))

for(let key in filha2) { //Percorre todos as chaves
    filha2.hasOwnProperty(key) ? //Verifica se a chave pertence ao objeto ou se veio por heranca e retorma true ou false. Aqui esta sendo usado o operador ternario
    console.log(key) : console.log(`Por herança: ${key}`)
}