import { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (_: any) => {
    const [count, setCount] = useState(0)

    // "useCallback()" tem o mesmo uso do "useMemo()" só que armazena uma função em cache ao invés de um valor
    // "useCallback()" é muito útil, pois a cada re-renderização as funções são criadas novamente, então com "useCallback()" elas são renderizadas somente quando as dependências são alteradas, melhorando o desempenho
    // "useCallback()" será útil se usar a função dentro do próprio componente ou se enviar para um componente estático
    const inc = useCallback((delta: number) => {
        setCount(current => current + delta)
    }, [setCount])
        // "useCallback(<função>, [<listaDependencias>])"
        // Esta função será SEMPRE A MESMA, então não tem porque criá-la novamente a cada re-renderização
            // Então usando "useCallback()" é possível controlar quando a função será criada novamente
                // Neste caso ela é criada somente 1 vez quando o componente é renderizado
        // A função "setCount()" é criada SOMENTE 1 VEZ, na hora que o componente é renderizado, então é uma boa dependência
            // Então a função passada será criada somente 1 vez, quando renderizar o componente
            // Se passar um array vazio nas dependências tem o mesmo efeito

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{count}</span>

                {/* 
                    -> Caso a função criada com "useCallback()" for enviada para outro componente, elá será executada sempre que o componente re-renderizar, então não adianta muito criar com "useCallback()"
                        -> Porém, caso o componente for estático(exportado usando "React.memo(<componente>)") a função será executada somente 1 vez
                */}
                <UseCallbackButtons inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
