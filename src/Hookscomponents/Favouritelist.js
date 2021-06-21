import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Favouritelist = () => {
  const { favouritelist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Favouritelist</h1>

          <span className="count-pill">
            {favouritelist.length} {favouritelist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        <div className="movie-grid">
            {favouritelist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="favouritelist" />
            ))}
          </div>       
      </div>
    </div>
  );
};
