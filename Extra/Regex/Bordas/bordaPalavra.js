const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'
// Sem usar acentuação

/*
    -> "\b" simboliza uma borda, ou seja, é um caractere que representa o fim ou início de uma palavra
        - Os caracteres que "\b" interpreta como bordas são: "\W"(W maiúsculo), fim e início de string
            - Ou seja, tudo o que não é letras sem acento e "_" (Espaços, símbolos, letras acentuadas)
*/
console.log(texto1.match(/\bdia\w+/gi))
    // Procura palavras que iniciem com "dia" que tenham uma borda antes
    // Neste texto, as únicas bordas existentes são: o espaço "\s", início e fim de linha
console.log(texto1.match(/\w+dia\b/gi))
    // Procura palavras que terminam com "dia" que tenham uma borda depois
console.log(texto1.match(/\w+dia\w+/gi))
    // Procura palavras que tenham "dia" no meio da palavra
console.log(texto1.match(/\bdia\b/gi))
    // Procura "dia" com bordas antes e depois

// "\b" tem problema com letras acentuadas, pois as considera como bordas
const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'
// Usando acentuações e símbolos

console.log(texto2.match(/\bdia\b/gi))
    // Retorna 4 "dia", pois considera "é" de "média" e "wikipédia", "-" de "bom-dia" como bordas

// Soluções
console.log(texto2.match(/(\S*)?dia(\S*)?/gi))
    // Procura dia com "não-espaços" opcionais antes e depois, ignorando os espaços agindo como se fosse uma borda
    // Retorna a vírgula também
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))
    // Tudo o que não for letras(acentuadas e não acentuadas) e "-" é considerado como borda
    // Não retorna a vírgula

console.log(texto1.match(/\w+/g))