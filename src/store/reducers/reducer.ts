import { combineReducers } from 'redux'

export const CardItem = (data = [],action:string) =>{
    console.log(data)
    console.log(action)
}

export const rootReducer = combineReducers({
    Todo:CardItem
})