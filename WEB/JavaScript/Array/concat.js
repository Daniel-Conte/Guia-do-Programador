const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos, 'Julieverson') //Cria um novo array concatenando outros arrays ou elementos
console.log(todos, filhas, filhos) //concat não altera o array original

console.log([].concat([1,2], [3,4], 5, [[6, 7]]))