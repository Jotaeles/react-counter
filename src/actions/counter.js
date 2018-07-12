import * as types from './actionTypes';
//creamos las acciones del contador
export const increment = () => {
    return {
        type: types.INCREMENT
    };
}

export const decrement = () => {
    return {
        type: types.DECREMENT
    };
}
