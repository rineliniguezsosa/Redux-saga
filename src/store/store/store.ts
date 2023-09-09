import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'  // esta importación es importante para la ejecución de tareas asincronas 

export const store = configureStore()

