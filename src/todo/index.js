import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './views/todoListItem.js';
import TodoListItemDetails from './views/todoListItemDetails';
import { Route } from 'react-router-dom';

class TodoList extends Component{
    render(){
        let { list } = this.props;
        let todoItems = list.map((item, index) => (
            <TodoListItem item={item} ind={index} key={index} />
        ));

        return(
            <div>
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

export default connect(mapStateToTodoListProps)(TodoList);