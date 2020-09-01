// . ? * + - ^ $ | [] {} () \ :
// Os meta-caracteres serão usados e explicados durante todo o capítulo

const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./g // Procura "." no texto
console.log(texto.split(regexPonto))
/*
    "\"(contra-barra) -> "escape"
        - Permite utilizar meta-caracteres de forma literal, ou seja, buscá-los no texto e não executar sua função de meta-caractere
        - Se usasse a expressão "/./g" não daria certo, pois "." tem uma função não-literal, então para anular essa função é usado o meta-caractere "escape"
*/

const regexSimbolos = /,|\.|\?|!| /g // Procura "," OU "." OU "?" OU "!" OU " " e retorna todos
console.log(texto.split(regexSimbolos))
/* 
    "|"(pipe) -> "ou"
        - /x|y|z/  -> Procura x OU y OU z

    Na expressão "regexSimbolos":
        - ',', '!' e ' ' não são meta-caracteres, então não precisa usar "\"
        - '.' e '?' são meta-caracteres, então é necessários usar "\"
*/