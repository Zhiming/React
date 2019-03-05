import React, {Component} from 'react';
import { Input, Button, List } from 'antd';
import store from './store';
import {getInputChangeAction, getAddItemAction, getItemDeleteAction} from './store/actionCreators'
import 'antd/dist/antd.css';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);

        store.subscribe(this.handleStoreChange);
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
            <div>
                <div style={{marginTop: "10px", marginLeft: "10px"}}>
                    <Input
                        value={this.state.inputValue}
                        placeholder="todo info"
                        style={{width: "300px", marginRight: "10px"}}
                        onChange={this.handleInputChange}
                    />
                    <Button
                        type="primary"
                        onClick={this.handleBtnClick}
                    >
                        提交
                    </Button>
                </div>

                <List
                    style = {{marginTop: "10px", marginLeft: "10px", width: "300px"}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
                />
            </div>
        );
    }
}

export default TodoList;