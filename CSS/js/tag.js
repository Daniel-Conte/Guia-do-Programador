const colors = { //Obj com as cores para cada tag
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) { //Funcao para retornar a cor da tag
        return this[tag] ? this[tag] : this.padrao //Usando "[]" para acessar os chaves ("this" tá referenciando "colors" e dentro de "[]" vai o nome da tag)
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase() //O atributo "tagName" pega o nome da tag (div, span ...)

    elemento.style.borderColor = colors.get(tagName) //Passando o nome da tag para a funcao "get" dentro de "colors"

    //Adiciona um novo elemento "label" antes das tags que não estiverem marcadas com a class "noLabel"
    if(!elemento.classList.contains('noLabel')) { //Se não tiver nenhuma "class" com o nome "noLabel" faça... "classList" lista todas as "class"
        const label = document.createElement('label') //Cria um novo elemento com o nome "label"
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName //Joga o nome das tags dentro da "label"
        elemento.insertBefore(label, elemento.childNodes[0]) //Insere a "label" antes do primeiro elemento (heranca)
    }
})