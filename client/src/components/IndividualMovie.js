import React, { Component } from 'react';
import axios from 'axios';

class IndividualMovie extends Component {
  state = {
    movie: {},
    credits: []
  }

  componentDidMount() {
    this.fetchIndividualMovie();
  }

  fetchIndividualMovie = async () => {
    try {
      const apiKey = '9a25e1555b7eca6261c39235272224a8';
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${apiKey}&language=en-US&append_to_response=credits`);
      let credits = response.data.credits.cast
      credits = credits.slice(0, 4)
      this.setState({
        movie: response.data,
        credits
      });
    } 
    catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <div>
          <img
            src={this.state.movie.poster_path
              ? `https://image.tmdb.org/t/p/w342${this.state.movie.poster_path}`
              : 'http://via.placeholder.com/342x513'}
            alt={`${this.state.movie.title} poster`}
          />
        </div>
        <div>
          <h1>{this.state.movie.title}</h1>
          <span>{this.state.movie.tagline}</span>
          <p>{this.state.movie.overview}</p>
        </div>
        <div>
          <div>
            Released: {this.state.movie.release_date}
          </div>
          <div>
            Average Score: {this.state.movie.vote_average}/10
          </div>
        </div>
      </div>
    );
  }
}

export default IndividualMovie;