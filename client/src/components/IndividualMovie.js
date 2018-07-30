import React, { Component } from 'react';
import axios from 'axios';

class IndividualMovie extends Component {
  state = {
    movie: {}
  }

  componentDidMount() {
    this.fetchIndividualMovie();
  }

  fetchIndividualMovie = async () => {
    try {
      const apiKey = '9a25e1555b7eca6261c39235272224a8';
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${apiKey}&language=en-US&append_to_response=credits`);
      this.setState({
        movie: response.data
      });
    } 
    catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default IndividualMovie;