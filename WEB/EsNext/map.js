//Map é um mapa de chave/valor em que as chaves são únicas e podem ser strings, números, objs ou funcoes
const tecnologias = new Map()
tecnologias.set('react', { framework: false }) //".set" adiciona um novo atributo. 'react' é a chave e "{ framework: false }" é o valor
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) //Não dá pra acessar atributos dessa forma
console.log(tecnologias.get('react')) //Pra acessar os atributos precisa usar ".get" e o nome
console.log(tecnologias.get('react').framework) //Acessando um atributo dentro da chave
console.log(tecnologias)

const chavesVariadas = new Map([ //Os atributos podem ser adicionados dessa forma também
    [function() { }, 'Função'], //Uma funcao como chave
    [{}, 'Objeto'], //Um obj como chave
    [123, 'Número'], //Numeros como chave
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) //".has()" verifica se a chave está contida
console.log(chavesVariadas.delete(123)) //Deleta a chave
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) //Mostra quantos elementos tem. Igual um ".length"

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') //Se tiver uma chave com o mesmo nome, esta será sobrescrita
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)