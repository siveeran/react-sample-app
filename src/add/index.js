import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addActions from './actions.js'
import { Alert, Modal, Button } from 'react-bootstrap';

class addItem extends Component{
    constructor(props, context){
        super(props, context);
        this.state = { itemName: '', statusMessage: '' };
        this.handleStatusClose = this.handleStatusClose.bind(this);
    }

    handleStatusClose() {
        this.setState({statusMessage: ''});
    }

    render(){
        let { add } = this.props;
        return (
            <section className="add-item">
                {this.state.statusMessage &&
                    <Alert bsStyle='success'>
                        {this.state.statusMessage}
                    </Alert>
                }

                <Modal show={this.state.statusMessage !== ''}>
                    <Modal.Header closeButton onHide={this.handleStatusClose}>
                        <Modal.Title>Add Action Status</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.state.statusMessage}</p>
                    </Modal.Body>
                    <Modal.Footer><Button onClick={this.handleStatusClose}>Close</Button></Modal.Footer>
                </Modal>

                <h4>Add New Item:</h4>
                <input name="item-name" value={this.state.itemName} onChange={(evt) => this.setState({itemName: evt.target.value, statusMessage: ''}) } />
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