function valorFinal(idade) {
    let pagar = 0

    if(idade < 0) { return 'Idade Inválida' }
    else if(idade < 10) { pagar = 80 }
    else if(idade < 30) { pagar = 50 }
    else if(idade < 60) { pagar = 95 }
    else if(idade > 59) { pagar = 130 }

    return pagar + 100
}

console.log(valorFinal(98))