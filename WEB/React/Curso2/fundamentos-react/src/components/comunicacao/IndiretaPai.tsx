import { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

// Passando dados do FILHO para o PAI

const IndiretaPai = (_: any) => {
    // É necessário utilizar estado
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    // É criada uma função no componente PAI que recebe as informações necessárias e mudam o estado do componente
    function fornecerInfo(nome: string, idade: number, nerd: boolean) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{nome} |</span>
                <span> {idade} |</span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'}!</span>
            </div>

            {/* A função é mandada para o FILHO que a executa e manda as informações como parâmetro, então essas informações enviadas pelo filho alteram o estado do pai */}
            <IndiretaFilho quandoClicar={fornecerInfo} />
        </div>
    )
}

export default IndiretaPai