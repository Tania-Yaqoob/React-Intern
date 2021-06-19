import './App.css';
import MovieList from './components/MovieList';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';
import Reviews from './components/Review';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [{
        Title: 'Star Wars: Episode IV - A New Hope of Star',
        Year: '1977',
        imdbID: 'tt0076759',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      },
      {
        Title: 'Star Wars:Episode V-The Empire Strikes back',
        Year: '1980',
        imdbID: 'tt0080684',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      },
      {
        Title: 'Star Wars: Episode VI - Return of the Jedi',
        Year: '1983',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      }]
    }
  }

  render() {
    const { movies } = this.state
    return (
      <div>


        <Router>
          <Switch>
            <Route path="/home" exact>
              <div className="block"> <h className="movie">All Movies</h><div className="circle">{movies.length}</div></div>
              
              <MovieList list={movies} />
            </Route>
            <Route path='/home/review/:id' render={(props) => {
              return (<Reviews {...props} />)
            }} />
            <Route path='/home/:imdbID' render={(props) => {
              return (<MovieDetail {...props}  />)
            }} />

          </Switch>
        </Router>



      </div>
    )
  }
}