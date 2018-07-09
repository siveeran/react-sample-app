import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainMenu from './views/mainMenu';
import TodoList from '../todo';
import AddItem from '../add';
import ManageList from '../manage';
import FooterCopyright from './views/footerCopyright';

class Layout extends Component{
    render(){
        return(
            <Router>
                <div className="container">
                    <header className="header">
                        <MainMenu />
                    </header>
                    <div className="content">
                        <Route exact path='/' component={TodoList} />
                        <Route path='/list' component={TodoList} />
                        <Route path='/add' component={AddItem} />
                        <Route path='/manage' component={ManageList} />
                    </div>
                    <footer className="footer">
                        <FooterCopyright />
                    </footer>
                </div>
            </Router>
        )
    }
}

export default Layout;