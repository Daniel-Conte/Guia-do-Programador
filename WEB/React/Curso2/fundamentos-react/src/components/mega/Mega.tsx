import { useState } from "react"
import './Mega.css'

const Mega = (_: any) => {
    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState(Array(qtde).fill(0))

    function setQuantidade(event: React.ChangeEvent<HTMLInputElement>) {
        const valor = +event.target.value

        if(valor >= 6 && valor <= 15) {
            setQtde(valor)
        }
    }

    function gerarNumeros(qtde: number) {
        const naoRepetidos = new Set<number>()
            // "Set" é um iterador que não aceita elementos repetidos
        const numeroAleatorio = () => Math.floor(Math.random() * 60) + 1
        
        while(naoRepetidos.size < qtde) {
            naoRepetidos.add(numeroAleatorio())
        }
        const numerosMega = Array.from(naoRepetidos)
            // Convertendo o "Set" para um array normal
        numerosMega.sort((n1, n2) => n1 - n2)

        setNumeros(numerosMega)
    }

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' - ')}</h3>

            <div>
                <label htmlFor="inputQtde">Quantidade de Números: </label>
                <input
                    id="inputQtde"
                    type="number"
                    value={qtde}
                    onChange={e => setQuantidade(e)}
                />
            </div>

            <button onClick={_ => gerarNumeros(qtde)}>Gerar Números</button>
        </div>
    )
}

export default Mega