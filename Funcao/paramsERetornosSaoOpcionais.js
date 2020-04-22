function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido ${area}m2`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 41, 12, 13, 43))
console.log(area(5, 5))     //funcoes sem retorno explicito o retorno = undefined