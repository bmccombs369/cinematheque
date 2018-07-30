import React, { Component } from 'react';

class HomePage extends Component {
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