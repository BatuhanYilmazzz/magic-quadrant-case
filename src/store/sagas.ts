import { all, fork } from 'redux-saga/effects';
import appSaga from './App/sagas';

export function* initialSaga() {
    console.log('');
}

function* rootSaga() {
    yield fork(initialSaga);
    // Add Sagas Here
    yield all([appSaga].map(fork));
}

export default rootSaga;
