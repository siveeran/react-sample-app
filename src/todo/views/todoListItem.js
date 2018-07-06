import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const TodoListItem = ({item, location, ind}) => (<li className={`sidebar-item ${((location.pathname === '/list/'+item.id || (location.pathname === '/list' && !ind)) ? 'active' : '')}`}><NavLink to={`/list/${item.id}`}>{item.name}</NavLink></li>);

export default withRouter(TodoListItem);