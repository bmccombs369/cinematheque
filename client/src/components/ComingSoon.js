import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

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
        <SearchBar />
        <h2>Coming Soon</h2>
        <div>
          {this.state.comingSoon.map((newMovie, i) => {
            return (
              <Link key ={i} to={`/movie/${newMovie.id}`}>
                <img
                  src={newMovie.poster_path
                    ? `https://image.tmdb.org/t/p/w342${newMovie.poster_path}`
                    : 'http://placeholder.pics/svg/342x513/DEDEDE/555555/No%20Picture'}
                  // make a placeholder poster a component with movie info
                  alt={`${newMovie.title} poster`}
                />
              </Link>
            )
          })}
        </div>
      </div>
    );
  }
}

export default ComingSoon;