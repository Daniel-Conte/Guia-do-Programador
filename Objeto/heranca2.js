// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' //EVITE mexer no Object.prototype
const avo = { attr1: 'A' } //Tem como protótipo "Object.prototype"
const pai = { __proto__: avo, attr2: 'B', attr3: '3' } //Tem como protótipo o obj "avo"
const filho = { __proto__: pai, attr3: 'C' } //Tem como protótipo o obj "pai"
console.log(filho.attr0) //Se o attr não estiver no escopo filho, vai procurar no escopo "pai", senao no escopo "avo" e por ultimo no escopo "Object.prototype"
console.log(filho.attr1, filho.attr2, filho.attr3) //Existem 2 "attr3", entao vai ser retornado aquele que estiver mais proximo do escopo do obj chamado