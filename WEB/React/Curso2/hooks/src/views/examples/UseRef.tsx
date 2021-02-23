import { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = function(s1: string, s2: string) {
    return s1.split('').map((e, i) => `${e}${s2[i] || ''}`).join('')
}

const UseRef = (_: any) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    // "useRef()" retorna um objeto normal com a propriedade "current"
        // Esta propriedade pode ser modificada e NÃO RE-RENDERIZA O COMPONENTE quando for alterada
    const count = useRef(0)
        // "useRef(<valorInicial>)"
            // "current" terá o valor inicial

    // "useRef()" é bastante utilizado para referenciar elementos jsx/tsx, assim a propriedade "current" recebe os atributos disponíveis do elemento referenciado
    const myInput1 = useRef<HTMLInputElement>(null)
        // Referência de um input que foi definido
    const myInput2 = useRef<HTMLInputElement>(null)

    // Esses "useEffect()" irão ficar alternando o "foco" dos inputs conforme for digitando
    useEffect(() => {
        count.current += 1
        myInput2.current?.focus()
            // Acessando o método "focus()" do input referenciado
                // "Foca" no campo input
    }, [value1])

    useEffect(() => {
        count.current += 1
        myInput1.current?.focus()
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #1" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input
                    type="text"
                    className="input"
                    value={value1}
                    onChange={e => setValue1(e.target.value)}
                    ref={myInput1}
                        // Usando a propriedade "ref" é possível atribuir a referência do elemento à alguma variável(neste caso o objeto gerado pelo "useRef()")
                />
            </div>

            <SectionTitle title="Exercício #1" />
            <div className="center">
                <input
                    type="text"
                    className="input"
                    value={value2}
                    onChange={e => setValue2(e.target.value)}
                    ref={myInput2}
                />
            </div>
        </div>
    )
}

export default UseRef
