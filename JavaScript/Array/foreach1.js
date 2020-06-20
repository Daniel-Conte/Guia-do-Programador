const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array) { //O array sempre passa 3 parametros(nome, indice, array). O 3(array) passa o array em si
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)