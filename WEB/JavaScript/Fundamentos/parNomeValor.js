//par Nome/Valor
const saudacao = "Opa"              //contexto léxico 1 (local que a variavel foi declarada)

function exec() {
    const saudacao = "Falaa"        //contexto léxico
    return saudacao
}
//Objetos são grupos aninhados de pares Nome/Valor
const Cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: "Rua Muito Legal",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)