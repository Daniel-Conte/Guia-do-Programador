/*
    - Promise("promessa") é uma estrutura que representa uma operação assíncrona
        - É um objeto que representa a eventual(futura) conclusão ou falha de uma operação assíncrona
    - Ela tem callbacks ".then()" e ".catch()" que tratam a resposta da operação:
        - "resolve" trata a resposta se ela foi recebida com sucesso
        - "reject" trata a resposta se houve algum problema
*/

// Retornando uma promise numa função é possível enviar um valor diferente para cada chamada da função, se for passado parâmetros
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Simulando um delay na operacao
            resolve(frase) // Tanto "resolve" quanto "reject" só podem ter 1 parâmetro
            reject('erro')
        }, segundos * 1000)
    })
}

// Chamando a função que tem a promise e enviando um valor que eu vou receber de volta
falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('??!!??')) // ".then()" acessa o conteudo da promise. É mais usado para acessar o "resolve"
    .then(outraFrase => console.log(outraFrase)) // Pode ser encadeado, com o parametro pegando o valor retornado do ".then()" acima
    .catch(erro => console.log(erro)) // ".catch()" pega somente o conteudo do "reject"


    
// Atribuindo uma promise à uma variável e agora com valor fixo
const promise = new Promise(resolve => {
    resolve(['Ana', 'Pedro', 4]) // Sempre que for chamada vai retornar esse valor
})
    
const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

promise
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log) // Não precisa criar uma função para dar log, porque cada ".then()" retorna só 1 parâmetro, então o log já pega esse valor que recebeu do ".then()" de cima