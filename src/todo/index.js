import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './views/todoListItem.js';
import TodoListItemDetails from './views/todoListItemDetails';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import todoListActions from './actions';

class TodoList extends Component{
    componentDidMount(){
        this.props.load();
    }

    render(){
        let { list } = this.props;
        let todoItems = list.map((item, index) => (
            <TodoListItem item={item} ind={index} key={index} />
        ));

        return(
            <div>
                <h4><strong>List Items:</strong></h4>
                <section className="sidebar">
                    <ul>
                        {todoItems}
                    </ul>
                </section>
                <section className="content-main">
                    <Route path={`/list/:itemId?`} component={TodoListItemDetails} />
                </section>
            </div>
        )
    }
}

function mapStateToTodoListProps(storeState) {
    let todos = storeState.todoListData;
    return { list: todos };
}

function mapDispatchToTodoListProps(dispatch){
    return bindActionCreators(todoListActions, dispatch);
}

export default connect(mapStateToTodoListProps, mapDispatchToTodoListProps)(TodoList);