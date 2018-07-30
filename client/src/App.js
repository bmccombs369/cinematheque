import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewReleases from './components/NewReleases';
import ComingSoon from './components/ComingSoon';
import HomePage from './components/HomePage';
import IndvidualMovie from './components/IndvidualMovie';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/movie/:id' component={IndvidualMovie} />
        </Switch>
      </Router>
    );
  }
}

export default App;
