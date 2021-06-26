import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";
class FavoriteMovieList extends Component {
  render() {
    return (
      <div>
        <h4>My favorite movies</h4>
        {this.props.favorites.map((movie) => {
          return <MovieItem movie={movie} key={movie.id} />;
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}
export default connect(mapStateToProps, null)(FavoriteMovieList);

