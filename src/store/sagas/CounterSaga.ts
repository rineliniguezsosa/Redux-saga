//funciones asincronas y eventos secundarios
import { put,takeEvery } from 'redux-saga/effects'
import { increment } from '../slice/slice'

function* incrementSaga(){
    yield put(increment());
}

export function* watchincrement(){
    yield takeEvery('counter/incrementSaga',incrementSaga);
}
