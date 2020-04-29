function bhaskara(a, b, c) {
    let delta = b ** 2 - 4 * a * c
    
    if(delta < 0) {
        console.log('Delta é negativo')
    } else {
        let resultado1 = (-b + Math.sqrt(delta)) / (2 * a)
        let resultado2 = (-b - Math.sqrt(delta)) / (2 * a)

        let resultado = [resultado1, resultado2]
        return resultado
    }    
}

console.log(bhaskara(2, -16, -18))