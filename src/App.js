import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import DashPanel from './components/layout/DashPanel';
//
import ProjectState from './context/projects/ProjectState';
import TaskState from './context/tasks/TaskState';
import DiagnosisState from './context/diagnosis/DiagnosisState';
import AuthState from './context/auth/AuthState';

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <ProjectState>
      <TaskState>
        <DiagnosisState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/new-account' component={NewAccount} />
                <Route exact path='/dashpanel' component={DashPanel} />
              </Switch>
            </Router>
          </AuthState>
        </DiagnosisState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
