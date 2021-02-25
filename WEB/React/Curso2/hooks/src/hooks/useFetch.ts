import { useEffect, useState } from "react"

interface IResponse {
    data: any
    loading: boolean
}

const useFetch = (url: string, method = 'get') => {
    const [response, setResponse] = useState<IResponse>({
        data: null,
        loading: true
    })

    useEffect(() => {
        fetch(url, { method })
            .then((resp) => resp.json())
            .then(json => setResponse({
                data: json,
                loading: false
            }))
    }, [url, method])

    return response
}

export default useFetch