import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application.jsx';
import { BrowserRouter as Router, } from 'react-router-dom';


ReactDOM.render(
    <Router>
        <Application/>
    </Router>,
    document.getElementById('app')
);
