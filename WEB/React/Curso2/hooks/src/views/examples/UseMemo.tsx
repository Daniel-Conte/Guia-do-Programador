import { useState, useMemo, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function sum(a: number, b: number): number {
    // Simulando uma operação demorada
    const future = Date.now() + 2000
    while(Date.now() < future) {}
    
    return a + b
}

const UseMemo = (_: any) => {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)
    //const [result2, setResult2] = useState(0)

    //const result = sum(n1, n2)

    // "useMemo()" recebe uma função e o retorno dessa função é armazenado na variável, só que essa função é executada novamente só quando um valor da lista de dependências for alterado (armazenamento em cache)
        // Isso é bom para executar operações pesadas
            // Executa a operação somente quando alguma dependência sofrer alteração, assim melhorando bastante o desempenho geral, pois não executa a operação sem que precise
        // É uma mistura de useState com useEffect
    const result = useMemo(() => sum(n1, n2), [n1, n2])
        // "useMemo(<função>, [<listaDependências>])"
            // Executa a função passada(que demora 2 segundos para executar) somente quando as dependências "n1" e "n2" forem alteradas

    // Obtendo o mesmo resultado do "useMemo()" só que usando "useState()" e "useEffect()"
    /* useEffect(() => {
        setResult2(sum(n1, n2))
    }, [n1, n2]) */

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <div className="center">

                {/* Ao alterar o valor dos inputs controlados pelo "n1" e "n2" irá disparar a função "sum(n1, n2)" que demora 2 segundos */}
                <input
                    type="number"
                    className="input"
                    value={n1}
                    onChange={e => setN1(+e.target.value)}
                />
                <input
                    type="number"
                    className="input"
                    value={n2}
                    onChange={e => setN2(+e.target.value)}
                />

                {/* O input controlado pelo "n3" não tem ligação com o "n1" e "n2", porém vai disparar a função "sum(n1, n2)" e vai ter a demora de 2 segundos. Porém, se utilizar o "useMemo()", a execução do "sum()" ficará a cargo somente do "n1" e "n2", assim o "n3" não irá disparar a função "sum()" */}
                <input
                    type="number"
                    className="input"
                    value={n3}
                    onChange={e => setN3(+e.target.value)}
                />
                <span className="text">{result}</span>
            </div>
        </div>
    )
}

export default UseMemo
