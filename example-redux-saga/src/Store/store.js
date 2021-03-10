import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import { watchUser } from '../Saga/saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(){
    const store = createStore(reducer, composeEnhancers(
        applyMiddleware(sagaMiddleware)
    ));
    sagaMiddleware.run(watchUser);
    return store;
}

export default configureStore;
