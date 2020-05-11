function pa(n, a1, r) {
    let vetorPA = []

    for(let i = 1; i <= n; i++) {
        vetorPA.push(a1 + (i - 1) * r)
    }
    let sn = n * ((a1 + vetorPA[n - 1]) / 2)

    console.log(`Vetor dos termos: ${vetorPA}
    Soma dos termos: ${sn}`)
}

function pg(n, a1, q) {
    let vetorPG = []
    
    for(let i = 1; i <= n; i++) {
        vetorPG.push(a1 * q ** (i - 1))
    }
    sn = (a1 * ((q ** n) - 1)) / (q - 1)

    console.log(`Vetor dos termos: ${vetorPG}
    Soma dos termos: ${sn}`)
}

pa(10, 10, 15)
pg(10, 5, 3)