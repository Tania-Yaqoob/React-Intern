import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromFavouritelist,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "favouritelist" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromFavouritelist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
