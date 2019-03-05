import {ADD_TODO_ITEM, INPUT_CHANGE, ITEM_DELETE} from "./actionTypes";

export const getInputChangeAction = (value) => ({
    type : INPUT_CHANGE,
    value
});

export const getAddItemAction = () => ({
    type : ADD_TODO_ITEM
})

export const getItemDeleteAction = (index) => ({
    type : ITEM_DELETE,
    index
});