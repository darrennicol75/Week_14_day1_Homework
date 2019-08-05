import React, { Component } from "react";

class MovieItem extends Component {

  render(){
    return (
      <li className='movie-item'>
        <a href={this.props.movie.url}>{this.props.movie.name}</a>
      </li>
    )
  }
}

export default MovieItem;

      // <p>{ this.props.url }</p>
