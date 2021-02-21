interface IIndiretaFilho {
    quandoClicar: (nome: string, idade: number, nerd: boolean) => void
}

const IndiretaFilho = (props: IIndiretaFilho) => {
    const gerarIdade = () => Math.round(Math.random() * 20) + 50
    const gerarNerd = () => !!Math.round(Math.random())
    
    return (
        <div>
            <div>Filho</div>

            {/* O filho executa a função e manda informações para o pai */}
            <button onClick={_ => props.quandoClicar('João', gerarIdade(), gerarNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}

export default IndiretaFilho