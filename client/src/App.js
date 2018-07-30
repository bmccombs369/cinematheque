import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import IndividualMovie from './components/IndividualMovie';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/movie/:id' component={IndividualMovie} />
        </Switch>
      </Router>
    );
  }
}

export default App;
