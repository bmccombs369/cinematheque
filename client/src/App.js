import React, { Component } from 'react';
import NewReleases from './components/NewReleases';
import ComingSoon from './components/ComingSoon';

class App extends Component {
  state = {
    newReleasesShowing: true
  }

  toggleMovieListings = () => {
    const isShowing = !this.state.newReleasesShowing;
    this.setState({ newReleasesShowing: isShowing });
  }

  render() {
    return (
      <div>
      <div>
        <button onClick={this.toggleMovieListings}>
        {this.state.newReleasesShowing ? 'Show Coming Soon' : 'Show New Releases'}
        </button>
      </div>
      <div>
        {this.state.newReleasesShowing ? <NewReleases /> : <ComingSoon />}
      </div>
      </div>
    );
  }
}

export default App;
