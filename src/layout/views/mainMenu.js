import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class MainMenu extends Component{
    render(){
        let { menuItems, location } = this.props;
        let menuList = menuItems.map((item, index) => {
            let className = 'menu-item' + ('/'+item.key === location.pathname ? ' active' : '');
            return(<NavLink key={index} to={`/${item.key}`} className={className}>{item.label}</NavLink>)
        });

        return(
            <nav>
                <ul className="menu">
                    {menuList}
                </ul>
            </nav>
        )
    }
}

function mapStateToMainMenuProps(storeState){
    return { menuItems: storeState.mainMenuData };
}

export default withRouter(connect(mapStateToMainMenuProps)(MainMenu));