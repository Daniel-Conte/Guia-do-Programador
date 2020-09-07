const texto = '1,2,3,4,5,6,a.b c!d?e[f'

// Para definir uma classe(ou conjunto) de caracteres usa-se "[]"
// Todos os caracteres que estão dentro de "[]" serão procurados individualmente(funciona como "||"(OU) para cada caractere)
const regexPares = /[02468]/g // Procura esses números individualmente
console.log(texto.match(regexPares))

const texto2 = 'João não vai passear na moto.'
const regexComESemAcento = /n[aã]/g // Procura "n" + "a" OU "ã"
console.log(texto2.match(regexComESemAcento))