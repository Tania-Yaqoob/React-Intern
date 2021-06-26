import { ADD_FAV } from "../actions";
function addToFavorite(state = [], action) {
  switch (action.type) {
    case ADD_FAV:
      console.log("Movies ADDed tio Favorite", action.movie);
      let favoriteMovies = [...state, action.movie];
      return favoriteMovies;
    default:
      return state;
  }
}
export default addToFavorite;
