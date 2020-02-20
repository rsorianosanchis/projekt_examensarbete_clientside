import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import DashPanel from './components/layout/DashPanel';
//

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/new-account' component={NewAccount} />
        <Route exact path='/dashpanel' component={DashPanel} />
      </Switch>
    </Router>
  );
}

export default App;
