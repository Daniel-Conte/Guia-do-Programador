interface IFamiliaMembro {
    nome: string,
    sobrenome?: string,
    key?: number
}

const FamiliaMembro = (props: IFamiliaMembro) => {
    return (
        <div>
            {props.nome} <strong>{props.sobrenome}</strong>
        </div>
    )
}

export default FamiliaMembro