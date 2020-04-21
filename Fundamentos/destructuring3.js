function rand({ min = 0, max = 1000 }) {                    //funcao para gerar um numero aleatorio com "destructuring" como parametro
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }            //criando um objeto
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))                       //ja que os parametros tem valores padrao, um objeto vazio funciona
console.log(rand())                         //nao funciona pois os parametros estao dentro de um destructuring de objeto