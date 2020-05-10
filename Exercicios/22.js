function jurosAnuidade(mes, valor) {
    if(mes > 0 && mes < 13) {
        juros = valor * (1 + 0.05) ** (mes - 1)
        return juros.toFixed(2)
    } else {
        return 'Mês Inválido'
    }

}

console.log(jurosAnuidade(12, 100))