import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SingleUser from './components/SingleUser';
import LandingPage from './components/LandingPage';
import NewUser from './components/NewUser';
import PatientPortal from './components/PatientPortal';
import Appointments from './components/Appointments';
import Billing from './components/Billing';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/users" component={LandingPage} />
          <Route exact path="/users/new" component={NewUser} />
          <Route exact path="/users/:id" component={SingleUser} />
          <Route exact path="/users/:id/appointments" component={Appointments} />
          <Route exact path="/users/:id/billing"component={Billing} />
        </Switch>
      </Router>
    );
  }
}

export default App;
