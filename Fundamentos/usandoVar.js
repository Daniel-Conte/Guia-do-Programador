{
    {
        {
            {
                {                           //"var" tem escopo Global e Local
                    var sera = "Será??"     //"var" fora de funcoes tem escopo global(pode ser acessada de todo o programa)
                    console.log(sera)       //FUJA DO ESCOPO GLOBAL
                }
            }
        }
    }
}
console.log(sera)

function teste(){
    var local = 123     //quando o "var" é criado dentro de uma funcao ele é escopo local(é acessado só dentro da funcao)
    console.log(local)
}

teste()
//console.log(local)      //se tentar acessar um "var local" fora da funcao de origem dá erro (como se a variavel nao foi definida)

var numero = 1
{
    var numero = 2                          //declarada fora de uma funcao, "var" tem escopo global
    console.log("dentro =", numero)
}
console.log("fora =", numero)