let num1 = 1
let num2 = 2

num1++            //nao tem prioridade pra adicionar 1
//++num1          //tem prioridade pra adicionar 1
console.log(num1)
--num1
console.log(num1)

//console.log(++num1 === num2--)      //o resultado é true pois o "num2" nao tem prioridade pra diminuir 1, entao a comparacao foi realizada antes que a diminuicao
console.log(++num1 === --num2)          //agora é false pois o "num2" foi diminuido antes de fazer a comparacao