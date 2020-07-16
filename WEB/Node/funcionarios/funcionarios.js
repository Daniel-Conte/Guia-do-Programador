const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //É um client http que faz requisiçoes para obter informações de algo que está remoto

const china = c => c.pais == 'China'    //Buscar mulher chinesa com menor salario
const mulher = m => m.genero == 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => { //Faz uma requisição em cima da url
    const funcionarios = response.data //Pega os dados da url

    console.log(funcionarios.filter(china).filter(mulher).reduce(menorSalario))
})