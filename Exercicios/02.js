function triangulo(lado1, lado2, lado3) {
    if((lado1 === lado2) && (lado2 === lado3)) {
        return "Triângulo Equilátero"
    } else if((lado1 !== lado2) && (lado2 !== lado3) && (lado1 !== lado3)){
        return "Triângulo Escaleno"
    } else {
        return "Triângulo Isósceles"
    }
}

console.log(triangulo(4, 1, 7))