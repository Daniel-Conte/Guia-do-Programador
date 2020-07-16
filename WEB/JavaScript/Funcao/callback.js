const fabricantes = ['Mercedes', 'Audi', 'BMW']

const imprimir = function(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)   //"forEach()" para cada valor no array vai executar tal funcao. Faz um loop ate terminar os valores no array
fabricantes.forEach(fabricante => console.log(fabricante))