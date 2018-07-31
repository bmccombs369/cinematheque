import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { Row, Col } from 'react-materialize';
import styled from 'styled-components';

const MoviePoster = styled.img`
  width: 342px;
  height: 513px;
`

class NewReleases extends Component {
  state = {
    newReleases: []
  }

  async componentDidMount() {
    this.fetchNewReleases();
  }

  fetchNewReleases = async () => {
    try {
      let date = new Date();
      let today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      let oneMonthAgo = (date.getMonth() === 0 ? `${date.getFullYear() - 1}-12-${date.getDate()}` : `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
      const apiKey = '9a25e1555b7eca6261c39235272224a8';
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${oneMonthAgo}&primary_release_date.lte=${today}&with_original_language=en`);
      this.setState({
        newReleases: response.data.results
      })
    }
    catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <SearchBar />
        <h2>New Releases</h2>
        <Row>
          {this.state.newReleases.map((newMovie, i) => {
            return (
              <Link to={`/movie/${newMovie.id}`} key={i}>
                <Col s={10} m={6} l={4} xl={3}>
                  <MoviePoster
                    src={newMovie.poster_path
                      ? `https://image.tmdb.org/t/p/w342${newMovie.poster_path}`
                      : 'http://placeholder.pics/svg/342x513/DEDEDE/555555/No%20Picture'}
                    alt={`${newMovie.title} poster`}
                  />
                </Col>
              </Link>
            )
          })}
        </Row>
      </div>
    );
  }
}

export default NewReleases;