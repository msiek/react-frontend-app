import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import AddItem from './components/AddItem';
import IndexItem from './components/IndexItem';
import EditItem from './components/EditItem';

//rendering routes as components
//only have one route which is the app route
ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/add-item' component={AddItem} />
            <Route path='/index' component={IndexItem} />
            <Route path='/edit/:id' component={EditItem} />
        </div>
    </Router>,
    document.getElementById('root')
);
