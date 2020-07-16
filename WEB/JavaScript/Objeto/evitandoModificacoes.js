// Object.preventExtensions
const produto = Object.preventExtensions({ //Não deixa adicionar novos atributos
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) //Verifica se pode ser extendido

produto.nome = 'Borracha' //PODE modificar os valores
produto.descricao = 'Borracha escolar branca' //NÃO PODE adicionar atributos
delete produto.tag //PODE excluir atributos
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) //Sela o objeto. Só deixa modificar os valores
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' //NÃO PODE adicionar atributos
delete pessoa.nome //NÃO PODE deletar atributos
pessoa.idade = 29 //PODE modificar os valores
console.log(pessoa)

//Object.freeze = selado + valores constantes
//Freeze congela totalmente o obj. Não deixa modificar nada