import {ADD_TODO_ITEM, INPUT_CHANGE, ITEM_DELETE} from "./actionTypes";

const defaultState = {
    inputValue : "",
    list : []
};

export default (state = defaultState, action) => {
    if (action.type === INPUT_CHANGE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
    }

    if (action.type === ITEM_DELETE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(newState.index, 1);
        return newState;
    }

    return state;
}