import { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (_: any) => {
    const [number, setNumber] = useState<number>(1)
    const [fatorial, setFatorial] = useState<number>(1)
    const [status, setStatus] = useState<string>("")

    function calcFatorial(n: number): number {
        if(n < 0) return -1
        if(n === 0) return 1
        return calcFatorial(n - 1) * n
    }

    //setFatorial(calcFatorial(number))
        // NUNCA altere o estado diretamente dentro do componente, pois assim o estado sempre vai ficar mudando, então o componente vai re-renderizar infinitamente

    // O "useEffect()" vai ser executado quando algo acontecer
    // É uma união dos ciclos de vida: "componentDidMount()", "componentDidUpdate()" e "componentWillUnmount()"(este somente quando "useEffect()" retornar uma função)
    // "useEffect(<função>, <listaDependencias>)"
        // "função" é uma callback que será chamada de acordo com a lista de dependências
        // "listaDependências" é um array que guarda o que irá chamar a função passada
            // Se passar um estado, toda vez que este estado modificar a função é chamada
            // Se passar vários estados, quando um deles for alterado a função será chamada
    useEffect(() => {
        setFatorial(calcFatorial(number))
    }, [number])
        // Executa a função na primeira vez que o componente renderizar e toda vez que o estado "number" for atualizado
            // "componentDidMount()" e "componentDidUpdate()"

    useEffect(() => {
        if(fatorial > 1000000) {
            document.title = 'Eitaa!'
        }
    }, [fatorial])

    useEffect(() => {
        setStatus(number % 2 === 0 ? 'Par' : 'Ímpar')
    }, [number])

    useEffect(() => {
        console.log('Primeira vez')
    }, [])
        // Ao passar uma lista vazia, a função será chamada somente quando o componente renderizar pela primeira vez
            // "componentDidMount()"

    useEffect(() => {
        console.log('Effect')
    })
        // Ao deixar o segundo parâmetro vazio, a função será chamada na primeira vez que o componente renderizar e toda vez que o componente atualizar
            // "componentDidMount()" e "componentDidUpdate()"

    useEffect(() => {
        console.log('Effect')

        return () => console.log('return effect')        
    }, [number])
        // Executa a função na primeira vez que o componente renderizar e toda vez que o estado "number" for atualizado
            // "componentDidMount()" e "componentDidUpdate()"
        // Ao retornar uma função, esta função será chamada sempre que o componente for desmontado
            // "componentWillUnmount()"

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #1" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">
                        {fatorial === -1 ? 'Não existe' : fatorial}
                    </span>
                </div>
                <input
                    type="number"
                    className="input"
                    value={number}
                    onChange={(e) => setNumber(+e.target.value)}
                />
            </div>

            <SectionTitle title="Exercício #2" />
            <div className="center">
                <div>
                    <span className="text">Status:</span>
                    <span className="text red">{status}</span>
                </div>
            </div>
        </div>

    )
}

export default UseEffect
