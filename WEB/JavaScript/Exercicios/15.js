function carros(carro) {
    switch(carro) {
        case 'Hatch':
            return 'Compra efetuada com sucesso!'
        case 'Sedan':
        case 'Motocicleta':
        case 'Caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automovel aqui.'
    }
}

console.log(carros('Hatch'))
console.log(carros('Sedan'))
console.log(carros('Motocicleta'))
console.log(carros('Caminhonete'))
console.log(carros('Harley'))