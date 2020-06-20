function numExtenso(num) {
    switch(num) {
        case 0:
            return 'Zero'
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Três'
        case 4:
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7:
            return 'Sete'
        case 8:
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        default:
            return 'Número fora do intervalo.'
    }
}

console.log(numExtenso(0))
console.log(numExtenso(1))
console.log(numExtenso(2))
console.log(numExtenso(3))
console.log(numExtenso(4))
console.log(numExtenso(5))
console.log(numExtenso(6))
console.log(numExtenso(7))
console.log(numExtenso(8))
console.log(numExtenso(9))
console.log(numExtenso(10))
console.log(numExtenso(20))