// Tente sempre colocar o nome do arquivo de componentes personalizados iniciando com letra MAIÚSCULA, para boas práticas de React

import React from 'react'

//export default () => "Teste"
    // Componente FUNCIONAL (criado a partir de uma função)
    // Se passar um texto sem tag, ele será o conteúdo da tag especificada no render

export default () => <h1>Teste 2</h1>
    // Passando um texto com tag, ele será filho da tag especificada no render
    // "default" é usado quando é exportado uma só coisa, é o export PADRÃO do arquivo
    // Não é possível ter mais que um 'export default' dentro de um arquivo