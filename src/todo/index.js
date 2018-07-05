import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoListItem from './views/todoListItem.js';
import { SIGBUS } from 'constants';

class TodoList extends Component{
    render(){
        let { list } = this.props;
        let todoItems = list.map((item, index) => (
            <TodoListItem item={item} key={index} />
        ));
        return(
            <div>
                <h2>Todos List:</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, illo.</p>
                <ul>
                    {todoItems}
                </ul>
            </div>
        )
    }
}

function mapStateToTodoListProps(storeState) {
    let todos = storeState.todoListData;
    return { list: todos };
}
function mapDispatchToTodoListProps(dispatch) {
    let actions = {};
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToTodoListProps, mapDispatchToTodoListProps)(TodoList);