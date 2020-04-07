import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

// Routes
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
