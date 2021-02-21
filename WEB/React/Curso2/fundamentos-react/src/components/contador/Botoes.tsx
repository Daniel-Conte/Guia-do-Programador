interface IBotoes {
    incrementar: () => void
    decrementar: () => void
}

const Botoes = (props: IBotoes) => {
    return (
        <div>
            <button onClick={_ => props.incrementar()}>+</button>
            <button onClick={_ => props.decrementar()}>-</button>
        </div>
    )
}

export default Botoes