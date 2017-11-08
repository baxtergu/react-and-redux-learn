import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import promiseMiddleware from './middleware/promise_middleware.js';
// import thunkMiddleware from 'redux-thunk';

import { reducer as weatherReducer } from './weather/';

const win = window;

const reducer = combineReducers({
    weather: weatherReducer
});

const middlewares = [promiseMiddleware];
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
);

export default createStore(reducer, {}, storeEnhancers);
