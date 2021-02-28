import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO, NumberActionTypes } from './types'

// Action Creator
    // São funções normais que facilitam o processamento de dados vindos como parâmetro (em vez de processar tudo no componente ou na função "dispatch"), mas que devem retornar uma Action
        // Ou seja, retornar um objeto contendo um atributo "type" para ativar o reducer e "payload"(caso necessário) para entregar valores
            // Quem irá chamar o reducer vai ser a função "dispatch", então é preciso passar essa função pro "dispatch"
    // São essas funções que devem ser mapeadas pelo "connect" para serem usadas nos componentes
export function alterarNumeroMinimo(novoNumero: number): NumberActionTypes {
    // ...Processar os dados vindos dos parâmetros

    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
            // Enviar os dados para o reducer alterar o estado
    }
}

export function alterarNumeroMaximo(novoNumero: number): NumberActionTypes {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}