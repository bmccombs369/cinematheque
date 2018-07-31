import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
  state = {
    query: '',
    searchResults: []
  }

  handleChange = async (event) => {
    const newState = {...this.state};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  preventSubmit = (event) => {
    event.preventDefault();
  }

  handleKeyUp = async () => {
    try {
      const apiKey = '9a25e1555b7eca6261c39235272224a8';
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${this.state.query}&page=1&include_adult=false`);
      this.setState({
        searchResults: response.data.results
      });
    }
    catch (error) {
      console.error(error);
    }
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
        <ul>
          {this.state.searchResults.map((searchedMovie, i) => {
            return(
              <li key={i}>
                <img
                  src={searchedMovie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${searchedMovie.poster_path}`
                    : 'http://via.placeholder.com/342x513'}
                  alt={`${searchedMovie.title} poster`}
                />
                <p>{searchedMovie.title}</p>
                <p>{searchedMovie.release_date}</p>
              </li>
            )
          })}
        </ul>
      </form>
    );
  }
}

export default SearchBar;