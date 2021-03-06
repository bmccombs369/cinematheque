import React, { Component } from 'react';
import NewReleases from './NewReleases';
import ComingSoon from './ComingSoon';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const HomePageWrapper = styled.div`
  align-items: center;
  margin: auto;
`

const ToggleButton = styled.button`
  background-color: #f3f3f3;
  &:focus {
    background-color: #f3f3f3;
  }
`

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
      <HomePageWrapper>
        <NavBar />
        <SearchBar />
        <ToggleButton onClick={this.toggleMovieListings}>
          {this.state.newReleasesShowing ? 'Show Coming Soon' : 'Show New Releases'}
        </ToggleButton>
        <div>
          {this.state.newReleasesShowing ? <NewReleases /> : <ComingSoon />}
        </div>
      </HomePageWrapper>
    );
  }
}

export default HomePage;