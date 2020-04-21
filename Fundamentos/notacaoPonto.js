console.log(Math.ceil(6.1))         //arendonda pra cima
console.log(Math.floor(6.8))        //arendonda pra baixo

const obj1 = {}
obj1.nome = "Bola"
//obj1['nome'] = "Bola2"            //outra maneira de adicionar dentro do objeto
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome        //"this" torna "nome" publico e pode-se instanciar novo obj com "nome"
    this.exec = function() {
        console.log("Exec...")
    }
}

const obj2 = new Obj("Cadeira")
const obj3 = new Obj("Mesa")
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()