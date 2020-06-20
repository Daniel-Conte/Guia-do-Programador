console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() { //"reverse" não existe dentro de String.prototype. Entao da pra criar uma funcao com esse nome
    return this.split('').reverse().join('') //Ela vai dividir a string, reverter e unir os caracteres. (.reverse é uma funcao ja existente, mas não dentro desse prototype)
}

console.log('Escola Cod3r'.reverse()) //Está acessando a funcao .reverse dentro de String.prototype. 'Escola Cod3r' é uma string.

Array.prototype.first = function() {
    return this[0]  //Mostra o primeiro elemento do array
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function() { //.toString já existe dentro de String.prototype entao essa funcao aqui está sobrescrevendo a funcao toString. NÃO FAÇA ISSO
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse()) //Deu pau por causa do toString sobrescrito
//NUNCA SOBRESCREVA UMA FUNCAO JÁ EXISTENTE DENTRO DE UM PROTOTYPE