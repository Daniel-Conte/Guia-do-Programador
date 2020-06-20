function maior(altura1, altura2, taxa1, taxa2) {
    if(altura1 > altura2) {
        console.log("A criança 1 é maior")
        crescimento(altura1, altura2, taxa1, taxa2)
    } else if(altura2 > altura1) {
        console.log("A criança 2 é maior")
        crescimento(altura2, altura1, taxa2, taxa1)
    } else {
        console.log("As crianças tem a mesma altura")
        if(taxa1 > taxa2) {
            console.log("A criança 1 irá ultrapassar a criança 2 em 1 ano")
        } else if(taxa2 > taxa1) {
            console.log("A criança 2 irá ultrapassar a criança 1 em 1 ano")
        } else {
            console.log("As crianças tem a mesma taxa de crescimento")
        }
    }
}

function crescimento(maior, menor, taxaMaior, taxaMenor) {
    if(taxaMaior > taxaMenor) {
        console.log("A criança menor não irá ultrapassar a maior")
    } else {
        let anos = 0
        while(maior != menor) {
            maior += taxaMaior
            menor += taxaMenor
            anos++
        }
        console.log(`A criança menor ultrapassará a maior em ${anos} anos`)
    }
}

maior(100, 100, 4, 4)