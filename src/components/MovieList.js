import React, { Component } from "react";
import MovieItem from './Movie';

class MovieList extends Component {

  render(){
    const movieItems =
    this.props.movie.map(movie => {
      return(
        <MovieItem movie={movie} key={movie.id}/>
      );
    });

    return(
      <div className='movie-list'>
        <ul>
        { movieItems }
        </ul>
      </div>
    )
  }
}

export default MovieList;


// LINE 12 if URL wanted url={movie.url}
