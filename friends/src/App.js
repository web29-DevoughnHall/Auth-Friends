import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to='/api/login'>Log In</Link></li>
        </ul>
        <Switch>
          <Route path='/api/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
