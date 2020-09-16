const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

/*
    - Quantificadores são gulosos na forma padrão
    - Engolem(retornam) o máximo de caracteres possível em 1 elemento

    - Para transformar em não guloso usa-se "?" depois do quantificador
    - Assim engole(retorna) o mínimo de caracteres possível em 1 elemento
*/

// Guloso (greedy)
console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,100}<\/div>/g))
    /*
        - Retorna a tag e qualquer conteúdo dentro delas
        - Como é guloso, ao invés de retornar 2 elementos com uma tag fechada em cada um, retornou a string inteira
            - Isso acontece porque reconheceu a última tag "</div>" como verdadeira(para encerrar) e não a primeira (engoliu o máximo de caracteres possível)
    */

// Não guloso (lazy)
console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))
    /*
        - Retorna a tag e qualquer conteúdo dentro delas
        - Como não é guloso, ao invés de retornar 1 elemento com a string inteira, retornou 2 elementos com uma tag fechada em cada um
            - Isso acontece porque reconheceu a primeira tag "</div>" como verdadeira(para encerrar) e não a última (engoliu o mínimo de caracteres possível)
    */