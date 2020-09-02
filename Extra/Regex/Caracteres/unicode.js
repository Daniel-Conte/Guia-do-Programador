/* 
    No início...
    Um byte(8 bits) - 256 caracteres
    Símbolos, Pontuação, A-Z, a-z, 0-9

    Mais tarde...
    Dois bytes(16 bits) - 65500+ caracteres
    +Símbolos, +Pontuação, A-Z, a-z, 0-9

    Hoje...
    Unicode
    Quantidade de bytes variável - Expansível
    Suporta mais de 1 milhão de caracteres
    Atualmente tem mais de 150.000 caracteres atribuídos

    https://unicode-table.com/pt/
*/

/* Para usar caracteres do unicode é preciso usar "\u<codigo>"

    \u02AC

    \u "3 caracteres para a linha" "1 caractere para a coluna"
*/
const texto = 'aʬc௵d'
console.log(texto.match(/\u02AC|\u0BF5/g))