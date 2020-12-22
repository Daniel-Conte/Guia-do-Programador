function funcaoDaSorte(num) {
    const numSorteado = Math.floor(Math.random() * (10 - 1 + 1)) + 1

    if(numSorteado === num) return `Parabéns! O número sorteado foi o ${numSorteado}`
    else return `Que pena! O número sorteado foi o ${numSorteado}`
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))