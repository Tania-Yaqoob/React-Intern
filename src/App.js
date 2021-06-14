import './App.css';
import MovieList from './components/MovieList';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MovieDetail from './components/MovieDetail';

import axios from 'axios';
import Reviews from './components/Review';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: []
    }
  }


  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=29d62274e14964e04e0a98c5c473c7b1&language=en-US&page=1`)
      .then(res => {
        
        this.setState({ movies: res.data.results })
      })

      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const { movies } = this.state
    return (
      <div>


        <Router>
          <Switch>
            <Route path="/home" exact>
              <div className="block"> <h className="movie">All Movies</h><div className="circle">3</div></div>
              <div className="filter"> filters</div>
              <div className="container">
                <div className="row">
                  {movies.map(data => <MovieList imdbID={data.id}
                    Title={data.original_title}
                    Year={data.Year}
                    Type={data.popularity}
                    Poster={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />)}
                </div>
              </div>
            </Route>
            <Route path='/home/review/:id' render={(props) => {
                    return ( <Reviews {...props } /> )
                }} />
            <Route path='/home/:imdbID' render={(props) => {
                    return ( <MovieDetail {...props } /> )
                }} />
           
          </Switch>
        </Router>



      </div>
    )
  }
}