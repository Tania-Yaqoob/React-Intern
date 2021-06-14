import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import './css/styling.css';
import React, { useState } from "react";
import axios from 'axios';
export default class MovieDetail extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        moviesDetail: []
      }
    }
    componentDidMount() {
      const moviesId = this.props.match.params.imdbID
      console.log(moviesId)
      axios.get(`https://api.themoviedb.org/3/movie/${moviesId}?api_key=29d62274e14964e04e0a98c5c473c7b1&language=en-US&page=1`)
        .then(res => {
          console.log(res)
          this.setState({ moviesDetail: res.data})
          
        })
  
        .catch(error => {
          console.log(error);
        })
    }
  
    render() {

      const { moviesDetail } = this.state
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
                                                <img src={`https://image.tmdb.org/t/p/w500${moviesDetail.poster_path}`}  class="img-responsive" alt="" />
                                            </div>
                                        </div>
                                        <div class="desc1 span_3_of_2" className="sectionA">


                                            <p class="movie_option"><strong>Title: </strong><a href="#">{moviesDetail.title}</a></p>
                                            
                                            <p class="movie_option"><strong>Language: </strong><a href="#">{moviesDetail.original_language}</a></p>
                                            <p class="movie_option"><strong>Release date: </strong>{moviesDetail.release_date}</p>
                                            <p class="movie_option"><strong>overview: </strong><a href="#">{moviesDetail.overview}</a></p>
                                            <p class="movie_option"><strong>Revenue: </strong><a href="#">{moviesDetail.revenue}</a></p>
                                            <p class="movie_option"><strong>Runtime: </strong>{moviesDetail.runtime}</p>
                                            <p class="movie_option"><strong>ID: </strong>{moviesDetail.id}</p>
                                            <Link to={`/home/review/${moviesDetail.id}`}> <Button  className="button2">Review</Button> </Link>
                                            
                                        </div>

                                    </div>


                                

                                
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
      );
    }
  }