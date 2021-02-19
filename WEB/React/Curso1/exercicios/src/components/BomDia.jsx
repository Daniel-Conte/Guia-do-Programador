import React from 'react'
//import React, { Fragment } from 'react'
    // "React" é importado SEM "{ }", pois "React" é o export DEFAULT do arquivo 'react'
    // "Fragment" é importado com "{ }", pois "Fragment" é um componente dentre vários outros dentro do arquivo 'react', e que NÃO é o export DEFAULT

// Não é possível criar mais do que 1 elemento em um componente, mas é possível ter 1 elemento com vários filhos

// Algumas alternativas para passar mais do que 1 elemento:

// Colocando os elementos dentro de uma tag "React.Fragment"
export default props =>
    <React.Fragment>
        <h1>Bom Dia {props.nome}</h1>
        <h2>Tenho {props.idade} anos</h2>
    </React.Fragment>
        // "React.Fragment" é usado para envolver mais do que 1 elemento
        // Não é uma tag HTML, será renderizado somente os elementos dentro
        // Pode-se usar o atributo "key"(é o único que se pode usar) para identificar
        // "key" será explicada em um método abaixo


// Colocando os elementos dentro de uma tag "Fragment"
/* export default props =>
    <Fragment>
        <h1>Bom Dia {props.nome}</h1>
        <h2>Tenho {props.idade} anos</h2>
    </Fragment> */
        // Se importar { Fragment } não precisa criar uma tag "React.Fragment"
        // "Fragment" é a mesma coisa que "React.Fragment"


// Colocando os elementos dentro de uma tag vazia
/* export default props =>
    <>
        <h1>Bom Dia {props.nome}</h1>
        <h2>Tenho {props.idade} anos</h2>
    </> */
        // É a mesma função do "React.Fragment"
        // Não é possível usar atributos
        // É mais recente, então se usar versões mais antigas use "React.Fragment"


// Colocando os elementos dentro de um array
// Este método vai adicionar os elementos dentro do elemento especificado no render SEM ter um elemento pai envolvendo-os
/* export default props => [ // Passando um parâmetro para o componente
    // O nome mais usado(padrão) é "props"
    // No parâmetro vai vir um Object com os atributos e valores declarados na tag no arquivo index.js
    <h1 key="h1">Bom Dia {props.nome}</h1>, // O parâmetro é chamado dentro de "{ }"
        // O atributo "key" é usado em arrays ou listas e a função é identificar cada elemento com um valor ÚNICO, assim o React consegue entender e diferenciar cada elemento
    <h2 key="h2">Tenho {props.idade} anos</h2>    
] */    


// Colocando os elementos dentro de uma tag HTML
// Esta tag envolvendo os elementos será também renderizada, ao contrário dos outros métodos
/* export default props =>
    <div>
        <h1>Bom Dia {props.nome}</h1>
        <h2>Tenho {props.idade} anos</h2>
    </div> */