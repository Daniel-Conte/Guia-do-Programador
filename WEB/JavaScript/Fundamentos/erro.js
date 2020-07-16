function tratarErroELancar(erro) {
    //throw new Error('...')      //"throw" relança o erro. Muda a mensagem para "..."
    //throw 10
    //throw false
    //throw 'mensagem'
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {                                               //"try" voce armazena dentro um codigo que você acha que pode dar erro
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e) {                   //"catch" Tratamento do erro. Vai receber o codigo dentro de "try" e armazenar dentro de "e"(nesse caso) caso esse dê um erro. 
        tratarErroELancar(e)
    } finally {                 //sempre vai ser chamado, mesmo se deu erro ou nao
        console.log('final')
    }
}

const obj = { nomee: 'Roberto' }    //o nome foi errado de proposito para mandar a mensagem de erro
imprimirNomeGritado(obj)