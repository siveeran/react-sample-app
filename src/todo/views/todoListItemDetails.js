import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import todoListActions from '../actions';

class listItemDetails extends Component{
    render(){
        let { match, items, markAsDone, markAsUndone } = this.props;
        let itemId = match.params.itemId ? match.params.itemId : 1;
        let listItem = items[itemId-1];
        
        return(
            <div>
                <h4>{listItem.name}</h4>
                <p>{listItem.description}</p>
                {!listItem.isDone ? (<button type='button' onClick={() => { markAsDone(listItem) }}>Mark as Done</button>) : (<button type='button' onClick={() => { markAsUndone(listItem) }}>Mark as Undone</button>)}
            </div>
        )
    }
}

function mapStateToListItemDetailsProps(storeState){
    return { items: storeState.todoListData };
}

function mapDispatchToListItemDetailsProps(dispatch){
    return bindActionCreators(todoListActions, dispatch);
}

export default connect(mapStateToListItemDetailsProps, mapDispatchToListItemDetailsProps)(listItemDetails);