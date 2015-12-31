
"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import WeUI from 'weui';

import Home from './pages/home/index';
import Car from './pages/car/index';
import Tel from './pages/tel/index';

ReactDOM.render((
    <Router>
        <Route path="/" component={Home}>
        </Route>
        <Route path="car" component={Car} />
        <Route path="tel" component={Tel} />
    </Router>
), document.getElementById('container'));