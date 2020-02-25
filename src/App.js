import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import DashPanel from './components/layout/DashPanel';
//
import ProjectState from './context/projects/ProjectState';
import TaskState from './context/tasks/TaskState';
import DiagnosisState from './context/diagnosis/DiagnosisState';

function App() {
  return (
    <ProjectState>
      <TaskState>
        <DiagnosisState>
          <Router>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/new-account' component={NewAccount} />
              <Route exact path='/dashpanel' component={DashPanel} />
            </Switch>
          </Router>
        </DiagnosisState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
