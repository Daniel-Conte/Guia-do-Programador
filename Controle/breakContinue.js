const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums) {
    if(x == 5) {
        break       //quando o indice for = a 5 a estrutura "for" vai ser interrompida.
    }               //"break" só funciona com "switch" e estruturas de repeticao. Ele afeta a estrutura mais proxima
    console.log(`${x} = ${nums[x]}`)
}

for(y in nums) {
    if(y == 5) {
        continue    //"continue" interrompe só essa sessao, ou seja, pula o indice 5 e continua o "for" normalmente
    }               //"continue" só funciona com "switch" e estruturas de repeticao. Ele afeta a estrutura mais proxima
    console.log(`${y} = ${nums[y]}`)
}

externo:        //Isso é um rótulo. O 1o "for" foi atribuido a ele  EVITE USAR
    for(a in nums) {
        for(b in nums) {
            if(a == 2 && b == 3) break externo  //foi usado o rótulo com o "break" para interromper o 1o "for" (externo)
            console.log(`Par = ${a}, ${b}`)     //senao o "break" iria interromper so o "for" mais proximo (interno)
        }
    }