let numero = 1                          //"let" tem escopo Global, Local e de Bloco
{                                       //"let" declarado fora de blocos e funcoes tem escopo Global
    let numero = 2                      //"let" declarado dentro de um bloco tem escopo só dentro desse bloco
    console.log("dentro =",numero)      //Dá preferencia para o let dentro do bloco, se nao achar procura fora dele
}
console.log("fora =",numero)                     //Imprime o valor dentro do let de escopo global pois está fora do bloco