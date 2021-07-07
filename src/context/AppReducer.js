export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_FAVOURITELIST":
      return {
        ...state,
        favouritelist: [action.payload, ...state.favouritelist],
      };
    default:
      return state;
  }
};
