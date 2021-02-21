interface IPassoForm {
    passo: number
    setPasso: (passo: number) => void
}

const PassoForm = (props: IPassoForm) => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input
                id="passoInput"
                type="number"
                value={props.passo}
                onChange={e => props.setPasso(+e.target.value)}
            />
        </div>
    )
}

export default PassoForm