import { takeLatest } from 'redux-saga/effects';
import { publicIpRequest } from './slices';

function* handleOnInıtRequestSaga() {
    try {
    } catch (error) {}
}

function* appSagasWatcher() {
    yield takeLatest(publicIpRequest, handleOnInıtRequestSaga);
}

export default appSagasWatcher;
