interface IDiretaFilho {
    nome: string,
    idade: number,
    nerd: boolean
}

const DiretaFilho = (props: IDiretaFilho) => {
    return (
        <div>
            <span>{props.nome} |</span>
            <span> {props.idade} |</span>
            <span> {props.nerd ? 'Verdadeiro' : 'Falso'}!</span>
        </div>
    )
}

export default DiretaFilho