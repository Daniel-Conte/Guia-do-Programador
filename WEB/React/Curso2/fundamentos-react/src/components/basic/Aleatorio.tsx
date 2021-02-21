interface IAleatorio {
    min: number,
    max: number
}

const Aleatorio = (props: IAleatorio) => {
    let {min, max} = props
    
    if(min > max) {
        [min, max] = [max, min]
    }
    const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min

    return (
        <div>
            <h2>Valor aleatório</h2>
            <p>
                <strong>Valor mínimo: </strong>
                { min }
            </p>
            <p>
                <strong>Valor máximo: </strong>
                { max }
            </p>
            <p>
                <strong>Valor Escolhido: </strong>
                { aleatorio }
            </p>
        </div>
    )
}

export default Aleatorio