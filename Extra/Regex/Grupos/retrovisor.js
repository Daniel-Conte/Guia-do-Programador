/*
    - Todo o conteúdo capturado por um grupo é armazenado em um retrovisor
        - Cada grupo tem seu próprio retrovisor
        - Para acessar esses retrovisores usa-se "\1 \2 \3 ..."
            - O número corresponde a ordem dos grupos, respectivamente
        - Para não armazenar usa-se "?:" logo no início do grupo: "(?: )"
            - O número do retrovisor desse grupo será passado para o próximo grupo
*/

const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
console.log(texto1.match(/<(\w+)>.*<\/\1>/g))
    // Todo o conteudo capturado pelo grupo("b", "strong", "div") está no retrovisor "\1"

const texto2 = 'Lentamente é mente muito lenta.'
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))
    // 2 grupos
        // "\1" está armazenando "lenta"
        // "\2" está armazenando "mente"
console.log(texto2.match(/(?:lenta)(mente).*\1/gi))
    // O primeiro grupo não irá armazenar
        // Então o segundo grupo armazena no retrovisor "\1"

console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi))

console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))
    // No ".replace()" os retrovisores são referenciados com "$" e o número do retrovisor