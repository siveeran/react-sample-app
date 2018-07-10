import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addActions from './actions.js'
import { Alert } from 'react-bootstrap';

class addItem extends Component{
    state = { itemName: '' };
    render(){
        let { add } = this.props;
        return (
            <section className="add-item">
                {this.state.statusMessage &&
                    <Alert bsStyle='success'>
                        {this.state.statusMessage}
                    </Alert>
                }
                <h4>Add New Item:</h4>
                <input name="item-name" value={this.state.itemName} onChange={(evt) => this.setState({itemName: evt.target.value, statusMessage: false}) } />
                <button type="button" onClick={() => {add(this.state.itemName).then( (response) => { console.log(response); this.setState({ statusMessage: 'New item has been added successfully.' }) })}}>ADD</button>
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