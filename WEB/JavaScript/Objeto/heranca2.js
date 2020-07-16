// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' //EVITE mexer no Object.prototype
const avo = { attr1: 'A' } //Tem como protótipo "Object.prototype"
const pai = { __proto__: avo, attr2: 'B', attr3: '3' } //Tem como protótipo o obj "avo"
const filho = { __proto__: pai, attr3: 'C' } //Tem como protótipo o obj "pai"
console.log(filho.attr0) //Se o attr não estiver no escopo filho, vai procurar no escopo "pai", senao no escopo "avo" e por ultimo no escopo "Object.prototype"
console.log(filho.attr1, filho.attr2, filho.attr3) //Existem 2 "attr3", entao vai ser retornado aquele que estiver mais proximo do escopo do obj chamado

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing (sobrepoe o valor) quando "carro" for prototipo de "ferrari"
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //"super" serve para referenciar o prototipo
    }
}

Object.setPrototypeOf(ferrari, carro)   //Outra forma de setar prototipos. (carro é prototipo de ferrari)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())