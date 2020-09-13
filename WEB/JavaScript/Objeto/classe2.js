// Herança com classes
// Definindo protótipos

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // "Avo" é protótipo(extende) de "Pai"
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // "super(<parametro>)" Faz referência à classe protótipo(Avo)
            // Passa um parâmetro diretamente para o protótipo, que é "Avo"
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva') // Passando "Silva" de parâmetro para a classe protótipo "Pai"
    }
}

const filho = new Filho
console.log(filho)