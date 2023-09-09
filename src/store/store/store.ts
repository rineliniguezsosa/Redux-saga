import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'  // esta importación es importante para la ejecución de tareas asincronas 
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    middleware:sagaMiddleware
})

