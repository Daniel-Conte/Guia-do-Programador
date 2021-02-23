import React from 'react'

interface IUseCallbackButtons {
    inc: (a: number)=> void
}

const UseCallbackButtons = (props: IUseCallbackButtons) => {
    console.log('render....')

    return (
        <div>
            <button
                className="btn"
                onClick={() => props.inc(6)}
            >+6</button>

            <button
                className="btn"
                onClick={() => props.inc(12)}
            >+12</button>

            <button
                className="btn"
                onClick={() => props.inc(18)}
            >+18</button>
        </div>
    )
}

// Este componente possui apenas conteúdo estático que nunca irá mudar, então é desperdício de desempenho ficar re-renderizando sempre
    // Então pra renderizar o componente somente 1 vez, exporta-se o componente com "React.memo()"
export default React.memo(UseCallbackButtons)
    // "React.memo(<componente>)"