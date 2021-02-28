import { createStore, combineReducers } from 'redux'

import { numberReducer } from './number/reducers'

const rootReducer = combineReducers({
        // "combineReducers(<reducers>)" combina todos os reducers recebidos em um único reducer
            // Geralmente os reducers são separados em outra pasta e são importados pra cá

    // Combinando todos os reducers em um único reducer principal que retorna o estado completo da aplicação(junção do estado de todos os reducers)
    number: numberReducer,
    //name: nameReducer,
    //product: productReducer
})

// Criando o "Store" que retorna o estado total gerado pelos reducers(combineReducers), uma função para chamar os reducers e a possibilidade de dar "subscribe" nas alterações
// É recomendável ter SOMENTE UM "Store" na aplicação
const store = createStore(rootReducer)
        // "createStore(<reducers>, <estadoInicial>, <middlewares>)"

// Sempre exporte por padrão o "Store"
export default store
export type RootState = ReturnType<typeof rootReducer>