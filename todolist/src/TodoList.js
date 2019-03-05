import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import "./style.css"

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue : "",
            list : []
        };
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputValue : value
        }));
    }

    handleBtnClick() {
        this.setState((prevState) => ({
            list : [...prevState.list, prevState.inputValue],
            inputValue : ""
        }));
    }

    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list};
        });
    }

    getTodoItem() {
        return (
            this.state.list.map((item, index) => {
                return (
                    <TodoItem
                        key = {index}
                        entry = {item}
                        index = {index}
                        deleteItem = {this.handleItemDelete}
                    />
                )
            })
        );
    }

    componentDidMount() {
        axios.get("/api/todolist")
            .then((res) => {
                this.setState(() => ({
                    list : res.data
                }))
            })
            .catch(() => {
                console.log("error");
            })
    }

    render(){
        return(
            <Fragment>
                <div>
                    <label htmlFor="inputArea">输入内容</label>
                    <input
                        id = "inputArea"
                        className="input"
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                <button onClick={this.handleBtnClick}>提交</button></div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;