//import { ADD_TODO_ITEM } from '../actions/actionTypes'
import { combineReducers } from 'redux';

let initValue = {
    list: [1, 2, 3]
}

let todolist = (state = initValue, action) => {
    switch (action.type) {
        case 'add_item':
            let newState = JSON.parse(JSON.stringify(state));
            newState.list.push(action.value);
            return newState;
        case 'del_item':
            let delState = JSON.parse(JSON.stringify(state));
            delState.list.splice(action.value.index,1);
            return delState;
        default:
            return state;
    }
}

let sum = (state = 1, action) => {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'jian':
            return state - 1;
        default:
            return state;
    }
}

export default combineReducers({
    todolist, sum
});