//"for of" pega os VALORES
for (let letra of 'Cod3r') { //Nesse caso pega as letras
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) { //"for in" pega os INDICES
    console.log(i)
}

for (let assunto of assuntosEcma) { //Com "for of" ele pega os valores
    console.log(assunto)
}

const assuntosMap = new Map([ //Tambem funciona com "Map"
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) { //Pega só as chaves
    console.log(chave)
}

for (let valor of assuntosMap.values()) { //Pega só os valores
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) { //Usando "destructuring" para separar a chave e o valor
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c']) //Funciona com Set
for (let letra of s) {
    console.log(s)
}