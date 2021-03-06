import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginPass from './components/LoginPass'
import Transf1   from './components/Transf1'
import Transf2 from './components/Transf2'
import Transf3 from './components/Transf3'
import HeaderComponent from './components/HeaderComponent'
import './index.css';
import { Router, Route, Link, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="/login" component={LoginPass}/>
    <Route path="/transf1" component={Transf1}>
    </Route>
    <Route path="/transf2" component={Transf2}>
    </Route>
    <Route path="/transf3" component={Transf3}>
    </Route>

    <Route path="/headerComponent" component={HeaderComponent}>
    </Route>
  </Router>,
  document.getElementById('root')
);
