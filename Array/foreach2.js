Array.prototype.forEach2 = function (callback) {
    for(let i = 0; i < this.length; i++) { //this vai fazer referencia ao array sendo chamado(fora dessa funcao)
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})