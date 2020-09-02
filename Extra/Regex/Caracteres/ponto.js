/*
    "." é um meta-caracter CORINGA
        - Substitui QUALQUER caracter (menos Quebra de Linha(\n))
            - Para substituir o "\n" use a flag "s"
        - Cada "." substitui somente UM caracter
        - Se executar a expressão /./ vai retornar cada caractere da string
*/
const texto = '1,2,3,4,5,6,7,8,9,0'

console.log(texto.match(/1.2/g)) // Procura a expressão "1X2"
console.log(texto.match(/1..2/g)) // Procura a expressão "1XX2"
console.log(texto.match(/1..,/g)) // Procura a expressão "1XX,"

const notas = '8.3,7.1,8.8,10.0'
console.log(notas.match(/8../g))
console.log(notas.match(/.\../g)) // Procura a expressão "X.X"

const string = 'Bom dia'
console.log(string.match(/./g)) // Retorna cada caractere separado
console.log(string.match(/.../g)) // Retorna elementos de 3 caracteres cada