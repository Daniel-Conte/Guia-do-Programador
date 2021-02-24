import { Dispatch } from '../types'

function numberAdd2(dispatch: Dispatch): void {
    const newState = {
        type: 'numberAdd2'
    }

    dispatch(newState)
}

function numberMulti7(dispatch: Dispatch): void {
    const newState = {
        type: 'numberMulti7'
    }

    dispatch(newState)
}

function numberDiv25(dispatch: Dispatch): void {
    const newState = {
        type: 'numberDiv25'
    }

    dispatch(newState)
}

function numberRound(dispatch: Dispatch): void {
    const newState = {
        type: 'numberRound'
    }

    dispatch(newState)
}

function numberAddN(dispatch: Dispatch, num: number): void {
    // As actions que possuem payload para valores dinâmicos, precisam ter parâmetros contendo o valor
    const newState = {
        type: 'numberAddN',
        payload: {
            num: num
        }
    }

    dispatch(newState)
}

export {
    numberAdd2,
    numberMulti7,
    numberDiv25,
    numberRound,
    numberAddN
}