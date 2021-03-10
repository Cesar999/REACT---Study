import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import userReducer from './reducers';

const reducers = combineReducers({ users: userReducer, form })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));

function configureStore(){
	return store;
}

export default configureStore;