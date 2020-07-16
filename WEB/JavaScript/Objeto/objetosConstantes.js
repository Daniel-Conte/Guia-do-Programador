// pessoa -> 123 -> {...}   | pessoa aponta para um endereço de memoria que aponta para um objeto.
const pessoa = { nome: 'João' } //Uma constante não te deixa mudar o endereço de memoria, mas te deixa mudar o objeto dentro desse endereco
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana' } //Um novo objeto vai sempre estar em um endereco diferente, então dá erro em uma constante

Object.freeze(pessoa)   //Congela o objeto. Não dá pra fazer nenhuma modificação em todo o objeto

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'  //Não muda quando congelado
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)