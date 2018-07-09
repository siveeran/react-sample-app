import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addActions from './actions.js'

class addItem extends Component{
    state = { itemName: '' };
    render(){
        let { add } = this.props;
        return (
            <section className="add-item">
                <h3>Add New Item:</h3>
                <input name="item-name" value={this.state.itemName} onChange={(evt) => { this.setState({itemName: evt.target.value}) }} />
                <button type="button" onClick={() => {add(this.state.itemName)}}>ADD</button>
            </section>
        )
    }
}

function mapStateToAddItemProps(storeState){
    return {list: storeState.todoListData};
}

function mapDispatchToAddItemProps(dispatch) {
    return bindActionCreators(addActions, dispatch);
}

export default connect(mapStateToAddItemProps, mapDispatchToAddItemProps)(addItem);