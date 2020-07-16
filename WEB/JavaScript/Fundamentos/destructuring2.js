const [ a ] = [10]              //atribuindo o valor 10 à variavel "a"
console.log(a)

const [ n1, , n3, , n5, n6 = 0 ] = [10, 7, 9, 8]        //atribui os valores às variaveis, respectivamente. os espacos sem variaveis ", ," ignoram o valor respectivo
console.log(n1, n3, n5, n6)

const [ , [ , nota] ] = [[, 8, 8], [9, 6, 8]]           //ignora o 1o array, ignora o 1o valor do segundo array e atribui o 2o
console.log(nota)