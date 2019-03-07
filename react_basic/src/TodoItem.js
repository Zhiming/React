import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.deleteItem(this.props.index);
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.props.entry}</div>
        )
    }

    componentWillReceiveProps(nextProps, nextContext) {

    }

    componentWillUnmount() {

    }
}

TodoItem.propTypes = {
    content : PropTypes.string,
    deleteItem : PropTypes.func,
    index : PropTypes.number
}

export default TodoItem;