import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'  // esta importación es importante para la ejecución de tareas asincronas 
import { CountReducer } from '../slice'
import { watchincrement } from '../sagas'


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer:{
        counter:CountReducer,
    },
})

