import React from 'react'

interface IContadorValor {
    // Usar "I" na frente do nome de interfaces é uma convenção que ajuda a identificar
    contador: number
}

export default (props: IContadorValor) => {
    // Como o "props" recebe todas as propriedades do componente, é recomendável que crie uma interface com todas as propriedades esperadas
    return (
        <p>{props.contador}</p>
    )
}