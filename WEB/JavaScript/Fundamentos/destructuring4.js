function rand([ min = 0, max = 1000 ]) {                    //estruturado na forma de array
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))         //os valores são atribuidos respectivamente. Nesse caso "min = 50" e "max = 40"
console.log(rand([992]))            //"992" vai ser atribuido só ao 1o parametro
console.log(rand([, 10]))           //o 1o parametro foi ignorado usando ",". "10" foi atribuido ao 2o parametro
console.log(rand([]))               //os 2 parametros possuem valores padrao
console.log(rand())                 //Erro. Ja que os parametros estao no destructuring de array e nao foi atribuido nenhum array