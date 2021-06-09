import './App.css';
import MovieList from './components/MovieList';
import React,{useState} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Basic from './components/Review';
import MovieDetail from './components/MovieDetail';
import Filter from './components/Filter'

function App() {
  const	SampleData= [
		{
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
		},
		{
			Title: 'Star Wars 2: Episode VII - Return of the Jedi',
			Year: '1983',
			imdbID: 'tt0086191',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
		},
		{
			Title: 'Star Wars 3: Episode VIII - Return of the Jedi',
			Year: '1983',
			imdbID: 'tt0086192',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
		}
	]
	
	const [filteredYear, setFilteredYear]=useState('1983');
	const filteredChangeHandler=selectedYear=>{
		setFilteredYear(selectedYear);
	};
	const filteredData=SampleData.filter((data)=>{
		return data.Year.toString()==filteredYear	
	});
	return (
		<div>
			

            <Router>
				<Switch>
				<Route path="/home" exact>
				<div className="block"> <h className="movie">All Movies</h><div className="circle">3</div></div>
		        <div className="filter"><Filter selected={filteredYear} onChangeFilter={filteredChangeHandler}/></div>
				<div className="container">
				<div className="row">
                {filteredData.map(data=> <MovieList imdbID={data.imdbID}
							Title={data.Title}
							Year={data.Year}
							Type={data.Type}
							Poster={data.Poster} />)}
							</div>
							</div>
                </Route>
			    <Route path="/home/:imdbID" exact component={MovieDetail}></Route>
				<Route path="/home/:imdbID/review" exact component={Basic}></Route>
			   </Switch>
			</Router>
			


		</div>
	);
}

export default App;
