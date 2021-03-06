import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Input, Col } from 'react-materialize';
import styled from 'styled-components';

const SearchResults = styled.ul`
  text-align: left;
  li{
    background-color: #36454f;
  }
  li:hover{
    background-color: #000000;
  }
`

const IndividualSearchResult = styled(Row)`
  margin: 0;
  p{
    color: #ffffff;
  }
`

const MoviePoster = styled.img`
  width: 100px;
  height: 150px;
`

const SearchBarWrapper = styled.div`
  align-items: center;
  margin: auto;
  width: 75%;
`

class SearchBar extends Component {
  state = {
    query: '',
    searchResults: []
  }

  handleChange = async (event) => {
    const newState = { ...this.state };
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
      <SearchBarWrapper>
        <Row onSubmit={this.preventSubmit}>
          <Input
            s={10}
            onKeyUp={this.handleKeyUp}
            onChange={this.handleChange}
            type='text'
            name='query'
            value={this.state.query}
            placeholder='Search a movie'
            validate
            required>
          </Input>
        </Row>
        { this.state.query === '' ? null : <SearchResults>
          {this.state.searchResults.map((searchedMovie, i) => {
            return (
              <li key={i}>
                <Link to={`/movie/${searchedMovie.id}`}>
                  <IndividualSearchResult>
                    <Col>
                      <MoviePoster
                        s={4}
                        src={searchedMovie.poster_path
                          ? `https://image.tmdb.org/t/p/w200${searchedMovie.poster_path}`
                          : 'http://via.placeholder.com/342x513'}
                        alt={`${searchedMovie.title} poster`}
                      />
                    </Col>
                    <Col s={6}>
                      <p>{searchedMovie.title}</p>
                      <p>{searchedMovie.release_date}</p>
                    </Col>
                  </IndividualSearchResult>
                </Link>
              </li>
            )
          })}
        </SearchResults> }
      </SearchBarWrapper>
    );
  }
}

export default SearchBar;