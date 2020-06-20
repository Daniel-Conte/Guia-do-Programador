function comparacao(string1, string2) {
    let estaContido = true

    for(let i = 0; i < string1.length; i++) {
        caractereString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++) {
            caractereString2 = string2.charAt(j).toLowerCase()
            if(caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {  //Se "estarContido" for false
            return estaContido
        }
    }
    return estaContido
}

console.log(comparacao('abc', 'cab'))