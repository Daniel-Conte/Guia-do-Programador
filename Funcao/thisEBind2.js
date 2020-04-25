function Pessoa() {
    this.idade = 0

    const self = this   //na "const self" o this nao pode variar, pois é uma constante. Aqui o "this" tá referenciando "Pessoa", entao se usar o "self" em outro contexto ele vai
    //referenciar o objeto "Pessoa", dispensando o uso do ".bind()". Esse metodo nao é o mais aconselhavel
    setInterval(function() {    //dispara a cada intervalo de tempo
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)     //"1000" é o intervalo de tempo
}

new Pessoa