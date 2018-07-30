import React, { Component } from 'react';
import NewReleases from './NewReleases';
import ComingSoon from './ComingSoon';

class HomePage extends Component {
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
        <button onClick={this.toggleMovieListings}>
          {this.state.newReleasesShowing ? 'Show Coming Soon' : 'Show New Releases'}
        </button>
        <div>
          {this.state.newReleasesShowing ? <NewReleases /> : <ComingSoon />}
        </div>
      </div>
    );
  }
}

export default HomePage;