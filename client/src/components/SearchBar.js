import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    query: '',
    searchResults: []
  }

  handleChange = (event) => {
    const newState = {...this.state};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  preventSubmit = (event) => {
    event.preventDefault();
  }

  handleKeyUp = () => {
    
  }

  render() {
    return (
      <form onSubmit={this.preventSubmit}>
        <input
          onChange={this.handleChange}
          type='text'
          name='query'
          value={this.state.query}
          onKeyUp={this.handleKeyUp}
          placeholder='Search a movie'
          required
        />
      </form>
    );
  }
}

export default SearchBar;