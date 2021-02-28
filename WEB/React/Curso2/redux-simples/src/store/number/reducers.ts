import {
    NumberState,
    NumberActionTypes,
    NUM_MAX_ALTERADO,
    NUM_MIN_ALTERADO
} from './types'

const initialState: NumberState = {
    min: 0,
    max: 10
}


// Cada reducer deve ser uma função que recebe o estado anterior e a action como parâmetro, e deve retornar o estado total atualizado com as modificações
    // Cada reducer tem seu estado próprio, que será unido com o estado dos outros reducers no reducer principal
export function numberReducer (
    state = initialState,
    action: NumberActionTypes
): NumberState {

    // Cada action de um reducer deve ser um "case" dentro do "switch" do reducer
    switch(action.type) {
        // A action é invocada pelo valor do atributo "type", que é passado na função "dispatch" junto com o atributo "payload"(quando necessário)

        case NUM_MIN_ALTERADO:
            return {
                ...state,
                    // Sempre clone o estado para não perder o estado que não foi modificado
                min: action.payload
            }
        case NUM_MAX_ALTERADO:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}