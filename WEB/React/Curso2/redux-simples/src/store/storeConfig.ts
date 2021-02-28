import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
        // "combineReducers(<reducers>)" combina todos os reducers recebidos em um único reducer
            // Geralmente os reducers são separados em outra pasta e são importados pra cá

    // Cada reducer deve ser uma função que recebe o estado atualizado e a action como parâmetro, e deve retornar o estado modificado
    // Cada reducer modifica uma parte específica do estado total
    numeros: function(state, action) {
        return {
            min: 7,
            max: 31
        }
    },
    nomes: function(state, action) {
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

function storeConfig() {

    // Criando o "Store" que retorna o estado total gerado pelos reducers(combineReducers), uma função para chamar os reducers e a possibilidade de dar "subscribe" nas alterações
    // É recomendável ter SOMENTE UM "Store" na aplicação
    return createStore(reducers)
        // "createStore(<reducers>, <estadoInicial>, <middlewares>)"
}

// Sempre exporte por padrão o "Store"
export default storeConfig