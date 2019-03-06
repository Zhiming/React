import React, {Component} from 'react';
import store from './store';
import TodoListUI from './TodoListUI'
import {
    getInputChangeAction,
    getAddItemAction,
    getItemDeleteAction,
    getInitListAction
} from './store/actionCreators'
import axios from "axios";


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);

        store.subscribe(this.handleStoreChange);
    }

    componentDidMount() {
        const action = getInitListAction();
        store.dispatch(action);
    }

    handleBtnClick() {
        store.dispatch(getAddItemAction());
    }

    handleInputChange(e) {
        store.dispatch(getInputChangeAction(e.target.value));
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleItemDelete(index) {
        store.dispatch(getItemDeleteAction(index));
    }

    render() {
        return (
            <TodoListUI
                inputValue = {this.state.inputValue}
                handleInputChange = {this.handleInputChange}
                handleBtnClick = {this.handleBtnClick}
                list = {this.state.list}
                handleItemDelete = {this.handleItemDelete}
            />
        );
    }
}

export default TodoList;