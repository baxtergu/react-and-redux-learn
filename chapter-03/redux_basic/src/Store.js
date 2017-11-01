import { createStore } from 'redux';
import reducer from './Reducer.js';

const initValues = {
    'First': 0,
    'Seconde': 10,
    'Third': 20
};

const store = createStore(reducer, initValues);

export default store;
