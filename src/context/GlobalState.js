import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  favouritelist: localStorage.getItem("favouritelist")
    ? JSON.parse(localStorage.getItem("favouritelist"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favouritelist", JSON.stringify(state.favouritelist));
  }, [state]);

  // actions
  const addMovieToFavouritelist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVOURITELIST", payload: movie });
  };

  const removeMovieFromFavouritelist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_FAVOURITELIST", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        favouritelist: state.favouritelist,
        addMovieToFavouritelist,
        removeMovieFromFavouritelist,
        
       
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
