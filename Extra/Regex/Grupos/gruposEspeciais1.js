const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/gi))

/*
    Positive Lookahead
    - "Olha pra frente pra buscar o que está atrás"
    - É chamado por "?=" no início de um grupo: (?= )
    - Retorna o que está ANTES do que foi especificado no grupo especial, ou seja, antes de um SUFIXO
*/
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))
    // Retorna o resultado disso "[\wÀ-ú]+" que está antes de uma ","
        // É retornado somente "calmo" pois é a única palavra que está antes de uma vírgula

/*
    Negative Lookahead
    - "Olha pra frente pra não buscar o que está atrás"
    - É chamado por "?!" no início de um grupo: (?! )
    - Retorna o que NÃO está ANTES do que foi especificado no grupo especial
*/
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))
    // Retorna o resultado disso "[\wÀ-ú]+" que não está antes de uma ","
        // Não é retornado "calmo" pois é a única palavra que está antes de uma vírgula
        // Não é retornado "é" pois é uma borda
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))
    // Agora sim, é retornado tudo, menos a palavra que está antes de uma vírgula