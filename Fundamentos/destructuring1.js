const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}
                                        //"destructuring" é usado para extrair nome de um objeto ou array e o nome extraido se torna uma variavel.
const { nome, idade } = pessoa          //(tipo da variavel) { (nome do que você quer extrair) } = (o objeto/array que você quer extrair)
console.log(nome, idade)                //"{}" é o comando "destructuring" para objetos. Para arrays é "[]"

const { nome: n, idade: i } = pessoa    //"(nome): (novo nome)" pode ser usado para renomear a sua variavel (nesse caso "n" e "i")
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa        //se nao existir o nome = undefined. caso nao encontre o nome pode ser usado um valor padrao "= (valor)"
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa     //para acessar um bloco dentro de outro objeto "(nome do bloco): { (extrair) }". "endereco" não é extraido
console.log(logradouro, numero, cep)

//const { conta: { ag, num } } = pessoa           //se tentar acessar um bloco que nao existe dentro de um nome que nao existe = erro
//console.log(ag, num)