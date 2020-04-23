import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'
import AddFriends from './components/AddFriends'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to='/login'>Log In</Link></li>
          <li><Link to='/friends'>Homie List</Link></li>
          <li><Link to='/addfriends'>Add a Bro</Link></li>
        </ul>
        <Switch>
          <PrivateRoute path='/friends/' component={Friends}/>
          <PrivateRoute path='/addfriends/' component={AddFriends}/>
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
