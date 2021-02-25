import { useState } from "react"

type UseCounter = [number, (a?: number) => void, (a?: number) => void]

// Criando um hook personalizado
const useCounter = (initialValue = 0, defaultDelta = 1): UseCounter => {
    const [count, setCount] = useState(initialValue)
        // É possível utilizar outros hooks

    function inc(delta = defaultDelta) {
        setCount(count + delta)
    }

    function dec(delta = defaultDelta) {
        setCount(count - delta)
    }

    return [count, inc, dec]
}

export default useCounter