import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { History } from 'history';
import app from './App/slices';

// Add Reducers Here
const rootReducer = (history: History<unknown>) =>
    combineReducers({
        router: connectRouter(history),
        app,
    });

export default rootReducer;
