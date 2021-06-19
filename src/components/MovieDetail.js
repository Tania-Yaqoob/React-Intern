import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/styling.css';
import React from "react";
export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      moviesDetail: [{
        Title: 'Star Wars: Episode IV - A New Hope of Star',
        Year: '1977',
        imdbID: 'tt0076759',
        language: 'en',
        Type: 'movie',
        overview: 'Good',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      },
      {
        Title: 'Star Wars:Episode V-The Empire Strikes back',
        Year: '1980',
        imdbID: 'tt0080684',
        language: 'en',
        Type: 'movie',
        overview: 'Too Good',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      },
      {
        Title: 'Star Wars: Episode VI - Return of the Jedi',
        Year: '1983',
        imdbID: 'tt0086190',
        language: 'en',
        Type: 'movie',
        overview: 'bad',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      }]
    }
  }
  render() {
    const moviesId = this.props.match.params.imdbID;
    const { moviesDetail } = this.state;
    const data = moviesDetail.find(list => list.imdbID === moviesId)
    return (

      <div>
        <div class="container">
          <div class="container_wrap">
            <div class="content">
              <div class="movie_top">
                <div class="col-md-9 movie_box">
                  <div>
                    <div class="grid images_3_of_2">
                      <div class="movie_image" >
                        <img src={data.Poster} class="img-responsive" alt="" />
                      </div>
                    </div>
                    <div class="desc1 span_3_of_2" className="sectionA">
                      <p class="movie_option"><strong>Title: </strong><a href="#">{data.Title}</a></p>
                      <p class="movie_option"><strong>Language: </strong><a href="#">{data.language}</a></p>
                      <p class="movie_option"><strong>Release date: </strong>{data.Year}</p>
                      <p class="movie_option"><strong>overview: </strong><a href="#">{data.overview}</a></p>
                      <Link to={`/home/review/${data.imdbID}`}> <Button className="button2">Review</Button> </Link>
                    </div>
                  </div>
                </div>
                <div class="clearfix"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}