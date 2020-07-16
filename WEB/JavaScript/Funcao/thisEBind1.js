const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao)  //"this" é atribuido à "pessoa" (que é dono do objeto). Entao dá pra acessar "saudacao" dentro de "falar"
    }
}
pessoa.falar()      //sem o "this" "saudacao" nao vai estar definida
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //amarra um objeto pra ser o dono da execucao. É onde o "this" vai fazer referencia
falarDePessoa()