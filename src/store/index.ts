import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { AppState } from './App';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

// serializableCheck and immutableCheck should be set to true after their issue has been solved
const middleware = [
    ...getDefaultMiddleware({
        thunk: false,
        immutableCheck: false,
        serializableCheck: false,
    }),
    sagaMiddleware,
    routerMiddleware(history),
];

const store = configureStore({
    reducer: rootReducer(history),
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export interface RootState {
    app: AppState;
}

export default store;
