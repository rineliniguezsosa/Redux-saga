import { put,takeEvery,call } from 'redux-saga/effects'
import { getcatsuccess } from '../slice'

//call allow call urls and apis
//put allow call our actions 
//takevery allow watch functions or watch a function when is call

function* getCats(){
    const req = yield call(()=> fetch('https://api.thecatapi.com/v1/breeds'))
    const resp = yield req.json() 
    const reducecats = resp.slice(0,10)
    console.log(reducecats)
    yield put(getcatsuccess(reducecats))
}

export function* watchgetCats(){
    yield takeEvery('cats/getcatsfetch',getCats)
}