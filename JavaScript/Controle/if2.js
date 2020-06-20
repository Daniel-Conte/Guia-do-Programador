function teste1(num) {
    if(num > 7)                     //a estrutura "if" funciona sem "{}", porem ela só vai executar a 1a linha
        console.log(num)            //executa
    console.log('Final')        //ignora
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {              //cuidado ao usar ";" nas estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)