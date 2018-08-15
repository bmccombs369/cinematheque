import React, { Component } from 'react';

class ListsIndex extends Component {
  state = {
    lists: []
  }

  componentDidMount() {

  }

  fetchLists = () => {

  }

  render() {
    return (
      <div>
        <div>
          <ul>
            <li>
              <h3>The Grasslands</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
            </li>
            <li>
              <h3>Paradise Found</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
            </li>
            <li>
              <h3>Smoke On The Water</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
            </li>
            <li>
              <h3>Headline</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ListsIndex;