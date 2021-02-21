interface IParOuImpar {
    numero: number
}

const ParOuImpar = (props: IParOuImpar) => {
    const isPar = props.numero % 2 === 0

    return (
        <div>
            {isPar ?
                <span>Par</span> : <span>Ímpar</span>
            }
        </div>
    )
}

export default ParOuImpar