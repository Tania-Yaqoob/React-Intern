import './App.css';
import MovieList from './components/MovieList'
import { propTypes } from 'react-bootstrap/esm/Image';
function App() {
  const SampleData=[
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
		}
];

  return (
    <div className="container">
      <div className="row">
        {SampleData.map((data)=>{
          return <MovieList 
          key={data.imdbID}
          Title={data.Title}
          Year={data.Year}
          Type={data.Type}
          Poster={data.Poster}/>
        })
        }
        
         
    </div>
    </div>
  );
}

export default App;
