//Promise("promessa") é uma estrutura que representa uma operação assíncrona
//Ela tem callbacks que tratam a resposta da operação:
//"resolve" trata a resposta se ela foi recebida com sucesso
//"reject" trata a resposta se houve algum problema

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { //Simulando um delay na operacao
            resolve(frase) //Tanto "resolve" quanto "reject" só podem ter 1 parâmetro
            reject('erro')
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('??!!??')) //".then()" acessa o conteudo da promise. É mais usado para acessar o "resolve"
    .then(outraFrase => console.log(outraFrase)) //Pode ser encadeado, com o parametro pegando o valor retornado do ".then()" acima
    .catch(erro => console.log(erro)) //".catch()" pega somente o conteudo do "reject"