import * as ActionTypes from './actionTypes.js'

export const increment = () => {
    return {
        type: ActionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: ActionTypes.DECREMENT
    };
};