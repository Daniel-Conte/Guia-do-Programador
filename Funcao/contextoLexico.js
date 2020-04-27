const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}
minhaFuncao()   //pega o valor 'Global' pois nao achou nada no escopo local e procurou no global

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()  //pega o valor 'Global' pois a funcao nao procura onde ela foi executada, e sim, onde ela foi inicialmente declarada. Acontece a mesma coisa que na primeira chamada