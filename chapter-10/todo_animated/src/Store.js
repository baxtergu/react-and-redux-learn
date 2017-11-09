import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { reducer as todoReducer } from './todos';
import { reducer as filterReducer } from './filter';

const win = window;

const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

const middlewares = [];
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

// 基本写法
// export default createStore(reducer);
//用于开启Redux Dev Tool功能的写法
export default createStore(reducer, {
    todos:[{
        id:999,
        text:"First Item",
        completed:false
    }],
    filter:"全部"
}, storeEnhancers);