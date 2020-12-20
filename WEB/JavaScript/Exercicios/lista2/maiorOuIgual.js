function maiorOuIgual(num1, num2) {
    if(!Number.isInteger(num1) || !Number.isInteger(num2)) return false
    
    return num1 >= num2
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, '0'))
console.log(maiorOuIgual(5, 1))