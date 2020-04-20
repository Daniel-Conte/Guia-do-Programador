for(var i = 0; i < 10; i++){            //como "var" está declarado fora de uma funcao, ele tem escopo global
    console.log(i)
}
console.log("i =",i)                    //e pode ser imprimido fora do bloco em que foi declarado