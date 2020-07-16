function comprar(trabalho1, trabalho2) {
    tomarSorvete = trabalho1 || trabalho2
    comprarTV50 = trabalho1 && trabalho2
    comprarTV32 = trabalho1 != trabalho2
    //comprarTV32 = !!(trabalho1 ^ trabalho2)         //bitwise xor
    manterSaudavel = !tomarSorvete                    //operador unário
    return { tomarSorvete, comprarTV50, comprarTV32, manterSaudavel }       //para retornar mais do que 1 valor use "objeto" (nao precisa necessariamente digitar "nome: valor")
}

console.log(comprar(true, true))
console.log(comprar(true, false))
console.log(comprar(false, true))
console.log(comprar(false, false))