let dobro = function (a) {      //funcao normal
    return (2 * a)
}

dobro = (a) => {                //arrow function
    return (2 * a)
}

dobro = a => 2 * a              //arrow function mais enxuta. Tem retorno implicito. Sem "{}" só pode ter 1 linha
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'    //"_" indica 1 parametro, porem nao é necessario passar um parametro na chamada
console.log(ola())