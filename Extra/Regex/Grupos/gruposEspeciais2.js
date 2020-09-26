const texto = 'supermercado superação hiperMERCADO Mercado'

console.log(texto.match(/(?:super)[\wÀ-ú]+/gi))

/*
    Positive Lookbehind
    - "Olha pra trás pra buscar o que está na frente"
    - É chamado por "?<=" no início de um grupo: (?<= )
    - Retorna o que está DEPOIS do que foi especificado no grupo especial, ou seja, depois de um PREFIXO
*/
console.log(texto.match(/(?<=super)[\wÀ-ú]+/gi))
    // Retorna o resultado disso "[\wÀ-ú]+" depois de "super"

/*
    Negative Lookbehind
    - "Olha pra trás pra NÃO buscar o que está na frente"
    - É chamado por "?<!" no início de um grupo: (?<! )
    - Retorna o que não está DEPOIS do que foi especificado no grupo especial, ou seja, depois de um PREFIXO
*/
console.log(texto.match(/(?<!super)mercado/gi))
    // Retorna "mercado" que não esteja precedido de "super"