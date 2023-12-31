import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'  // esta importación es importante para la ejecución de tareas asincronas 
import { CountReducer,CatsReducer } from '../slice'
import { watchincrement,watchgetCats } from '../sagas'


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer:{
        counter:CountReducer,
        cats:CatsReducer
    },
    middleware:[sagaMiddleware]
})

sagaMiddleware.run(watchincrement)
sagaMiddleware.run(watchgetCats)
