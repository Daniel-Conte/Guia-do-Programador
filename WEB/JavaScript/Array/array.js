console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') //Não recomendado
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] //Recomendado
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //Reordena os elementos em ordem alfabetica ou crescente
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') //"Splice" pode adicionar e remover elementos. (pega um indice para referencia, quantos elementos quer deletar a partir do indice de referencia, adicionar elementos a partir do indice de referencia)
console.log(aprovados)