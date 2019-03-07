import React, {Component} from 'react';
import {connect} from 'react-redux';

const TodoList = (props) => {

    const {inputValue, changeInputValue, list, handleBtnClick} = props;

    return (
        <div>
            <div>
                <input value = {inputValue} onChange = {changeInputValue}/>
                <button onClick = {handleBtnClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (<li key = {index}>{item}</li>);
                    })
                }
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        inputValue : state.inputValue,
        list : state.list
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type : "change_input_value",
                value : e.target.value
            }

            dispatch(action);
        },

        handleBtnClick() {
            const action = {
                type : "add_item"
            }

            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);