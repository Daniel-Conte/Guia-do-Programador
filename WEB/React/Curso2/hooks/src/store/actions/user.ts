import { Dispatch } from '../types'

// Este arquivo irá conter as actions relacionadas com o estado "user"

// Neste caso, as actions são transformadas em funções que chamam a função "dispatch" para alterar o estado
// Separar as actions em arquivos específicos é muito bom, pois assim é possível encapsular o código que as vezes é grande(pode ser que precise fazer uma requisição para o back-end)
    // Senão fica muito ruim deixar um código grande no meio de uma função onClick de um elemento no componente

// A função deve receber de parâmetro a função dispatch que irá alterar o estado
function login(dispatch: Dispatch, name: string) {

    // Agora que não está em um elemento, é possível fazer todo um tratamento para a action
    const newState = {
        type: 'login',
        payload: {
            name
        }
    }

    dispatch(newState)
}

export {
    login
}