import React from 'react'

// "export" ao contrário de "export default", precisa declarar uma variável

export const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>

export const BoaNoite = props => <h1>Boa Noite {props.nome}</h1>

export default { BoaTarde, BoaNoite }

// Outra forma
// Nessa forma precisa importar usando "{ ... }"

// export const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>

// export const BoaNoite = props => <h1>Boa Noite {props.nome}</h1>