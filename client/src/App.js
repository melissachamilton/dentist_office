import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SingleUser from './components/SingleUser';
import LandingPage from './components/LandingPage';
import NewUser from './components/NewUser';
import Appointments from './components/Appointments';
import NewAppointment from './components/NewAppointment';
import AllUsers from './components/AllUsers';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/users" component={AllUsers} />
          <Route exact path="/users/new" component={NewUser} />
          <Route exact path="/users/:id" component={SingleUser} />
          <Route exact path="/users/:id/appointments" component={Appointments} />
          <Route exact path="/users/:id/appointments/new" component={NewAppointment} />
        </Switch>
      </Router>
    );
  }
}

export default App;
