function MeuObjeto() {}
console.log(MeuObjeto.prototype) //prototype é um obj

const obj1 = new MeuObjeto //TODOS os objs instanciados a partir de uma função contrutora tem seus __proto__ apontados pro .prototype da funcao
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo' //Dá pra criar atributos dentro do prototype. Todos que tiverem acesso à esse prototype tem acesso aos atributos
MeuObjeto.prototype.falar = function() { //.prototype se comporta como um objeto normal
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar() //obj1 tem o prototipo no MeuObjeto

obj2.nome = 'Rafael'
obj2.falar() //obj2 não tem essa funcao, entao pegou do .prototype. Mas usou o nome dentro de seu escopo (É o mais proximo)

const obj3 = {}//"obj3" tem seu proto apontando para "Object.prototype"
obj3.__proto__ = MeuObjeto.prototype //Vinculando o "obj3" ao "MeuObjeto".Agora o proto de "obj3" aponta para o "MeuObjeto.prototype"
obj3.nome = 'Obj3'
obj3.falar() //obj3 acessando "MeuObjeto.prototype"

//Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) //O proto do obj instanciado a partir de MeuObjeto aponta para o .prototype de MeuObjeto
console.log(MeuObjeto.__proto__ === Function.prototype) //Funcoes tem __proto__ e apontam pra Function.prototype
console.log(Function.prototype.__proto__ === Object.prototype) //Doidera. Enfim, tudo aponta para Object.prototype. Object é Deus e todo o resto é sua criação com imagem e semelhança de seu prototype
console.log(Object.prototype.__proto__ === null)