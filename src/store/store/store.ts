import { configureStore,combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'  // esta importación es importante para la ejecución de tareas asincronas 
import { CountReducer } from '../slice/slice'


const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
    count:CountReducer 
})

export const store = configureStore({
    reducer:reducer,
})

