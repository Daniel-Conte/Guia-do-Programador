function nota(cod, nota1, nota2, nota3) {
    let notas = []

    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let resultado = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10

    console.log(`Código: ${cod}
    Nota 1: ${nota1}
    Nota 2: ${nota2}
    Nota 3: ${nota3}
    Média: ${resultado}
    ${resultado >= 5 ? 'Aprovado!' : 'Reprovado.'}`)
    
}

nota(10, 7, 9, 6)