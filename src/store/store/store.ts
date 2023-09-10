import { configureStore,combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'  // esta importación es importante para la ejecución de tareas asincronas 
import { rootReducer } from '../reducers/reducer'


const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({

})

export const store = configureStore({
    reducer:rootReducer,
})

