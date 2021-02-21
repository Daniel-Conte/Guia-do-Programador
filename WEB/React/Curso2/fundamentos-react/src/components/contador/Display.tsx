interface IDisplay {
    numero: number
}

const Display = (props: IDisplay) => {
    return (
        <h3>{props.numero}</h3>
    )
}

export default Display