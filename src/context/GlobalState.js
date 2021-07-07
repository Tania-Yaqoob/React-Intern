import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";


// initial state
const initialState = {
  favouritelist:("favouritelist")
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);


  // actions
  const addMovieToFavouritelist = (item) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVOURITELIST", payload: item });
  };

 

  return (
    <GlobalContext.Provider
      value={{
        favouritelist: state.favouritelist,
        addMovieToFavouritelist,
        
       
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
