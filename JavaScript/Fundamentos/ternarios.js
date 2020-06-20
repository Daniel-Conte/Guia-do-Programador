const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'     //"?" é o operador ternario. A expressao "nota >= 7" precisa ser true/false
                                                                   //caso for "true" vai ser retornado o 1o campo(nesse caso 'Aprovado')
                                                                   //caso for "false" vai ser retornado o 2o campo(nesse caso 'Reprovado')
                                                                   //o 1o e o 2o campo precisam estar separados por ":"
console.log(resultado(7.1))
console.log(resultado(6.2))