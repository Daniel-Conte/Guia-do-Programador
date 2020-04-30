function fatorial(num) {
    let resultado = 1
    for(let i = 2; i <= num; i++) {
        resultado *= i
    }
    console.log(resultado)
}

fatorial(5)
fatorial(6)
fatorial(1)
fatorial(0)
fatorial()