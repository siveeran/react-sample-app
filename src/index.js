import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import { Provider } from 'react-redux';
import appStore from './store';

// import App from './App';
import Layout from './layout';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={appStore}><Router><Layout /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
