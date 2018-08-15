import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import IndividualMovie from './components/IndividualMovie';
import ListsIndex from './components/ListsIndex';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/movie/:id' component={IndividualMovie} />
          <Route exact path='/lists' component={ListsIndex} />
        </Switch>
      </Router>
    );
  }
}

export default App;
