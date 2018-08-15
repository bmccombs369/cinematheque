import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { Row, Col } from 'react-materialize';
import styled from 'styled-components';

const MoviePoster = styled.img`
  width: 100%;
`

const ComingSoonWrapper = styled(Row)`
  align-items: center;
  margin: auto;
  width: 75%;
`


class ComingSoon extends Component {
  state = {
    comingSoon: []
  }

  async componentDidMount() {
    this.fetchComingSoon();
  }

  fetchComingSoon = async () => {
    try {
      let date = new Date();
      let today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      let inOneMonth = (date.getMonth() === 11 ? `${date.getFullYear() + 1}-1-${date.getDate()}` : `${date.getFullYear()}-${date.getMonth() + 2}-${date.getDate()}`);
      const apiKey = '9a25e1555b7eca6261c39235272224a8';
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${today}&primary_release_date.lte=${inOneMonth}&with_original_language=en`);
      this.setState({
        comingSoon: response.data.results
      })
    }
    catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <h2>Coming Soon</h2>
        <ComingSoonWrapper>
          {this.state.comingSoon.map((comingMovie, i) => {
            return (
              <Link  to={`/movie/${comingMovie.id}`} key={i}>
                <Col s={10} m={6} l={4} xl={3}>
                  <MoviePoster
                    src={comingMovie.poster_path
                      ? `https://image.tmdb.org/t/p/w342${comingMovie.poster_path}`
                      : 'http://placeholder.pics/svg/342x513/DEDEDE/555555/No%20Picture'}
                    alt={`${comingMovie.title} poster`}
                  />
                </Col>
              </Link>
            )
          })}
        </ComingSoonWrapper>
      </div>
    );
  }
}

export default ComingSoon;