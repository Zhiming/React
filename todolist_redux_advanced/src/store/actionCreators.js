import {ADD_TODO_ITEM, INPUT_CHANGE, ITEM_DELETE, INIT_LIST} from "./actionTypes";
import axios from "axios";

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

export const getInitListAction = (data) => ({
    type : INIT_LIST,
    data
});

export const getTodoList = () => {
    return (dispatch) => {
        axios.get("/api/list").then((res) => {
            dispatch(getInitListAction(res.data));
        }).catch(() => {
            console.log("error");
        });
    }
}