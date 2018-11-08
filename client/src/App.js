import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import SingleUser from './components/SingleUser';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/users/:id" component={SingleUser} />
        </Switch>
      </Router>
    );
  }
}

export default App;
