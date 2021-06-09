import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import './css/styling.css';
function MovieDetail() {
    
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <div class="container">
                <div class="container_wrap">

                    <div class="content">
                        <div class="movie_top">
                            <div class="col-md-9 movie_box">

                                {location.pathname == `/home/tt0076759` ? (
                                    <div>
                                        <div class="grid images_3_of_2">
                                            <div class="movie_image" >
                                                <img src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" class="img-responsive" alt="" />
                                            </div>
                                        </div>
                                        <div class="desc1 span_3_of_2" className="sectionA">


                                            <p class="movie_option"><strong>Country: </strong><a href="#">established</a>, <a href="#">USA1</a></p>
                                            <p class="movie_option">{location.pathname}</p>
                                            <p class="movie_option"><strong>Category: </strong><a href="#">Adventure</a></p>
                                            <p class="movie_option"><strong>Release date: </strong>December 12, 1977</p>
                                            <p class="movie_option"><strong>Director: </strong><a href="#">suffered </a></p>
                                            <p class="movie_option"><strong>Actors: </strong><a href="#">anything</a> <a href="#"> Virginia</a></p>
                                            <p class="movie_option"><strong>Age restriction: </strong>1</p>
                                            <Link to='/home/:id/review' ><div class="down_btn" className="button" class="btn1" ><span className="spann">Reviews</span></div></Link>
                                        </div>

                                    </div>


                                ) : location.pathname == `/home/tt0080684` ? (
                                    <div>
                                        <div class="grid images_3_of_2">
                                            <div class="movie_image" >
                                                <img src="https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" class="img-responsive" alt="" />
                                            </div>
                                        </div>
                                        <div class="desc1 span_3_of_2" className="sectionA">


                                            <p class="movie_option"><strong>Country: </strong><a href="#">established</a>, <a href="#">USA</a></p>
                                            <p class="movie_option">{location.pathname}</p>
                                            <p class="movie_option"><strong>Category: </strong><a href="#">Adventure</a>, <a href="#">Fantazy</a></p>
                                            <p class="movie_option"><strong>Release date: </strong>December 12, 1980</p>
                                            <p class="movie_option"><strong>Director: </strong><a href="#">suffered </a></p>
                                            <p class="movie_option"><strong>Actors: </strong><a href="#">anything</a>, <a href="#">Lorem Ipsum</a>, <a href="#"> discovered</a>, <a href="#"> Virginia</a>, <a href="#"> Virginia</a>, <a href="#">variations</a>, <a href="#">variations</a>, <a href="#">variations</a>, <a href="#"> Virginia</a> <a href="#">...</a></p>
                                            <p class="movie_option"><strong>Age restriction: </strong>13</p>
                                            <Link to='/home/:id/review' ><div class="down_btn" className="button" class="btn1" ><span className="spann">Reviews</span></div></Link>
                                        </div>
                                    </div>
                                ) : location.pathname == `/home/tt0086190` ? (
                                    <div>
                                        <div class="grid images_3_of_2">
                                            <div class="movie_image" >
                                                <img src="https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" class="img-responsive" alt="" />
                                            </div>
                                        </div>
                                        <div class="desc1 span_3_of_2" className="sectionA">


                                            <p class="movie_option"><strong>Country: </strong><a href="#">established</a>, <a href="#">USA</a></p>
                                            <p class="movie_option">{location.pathname}</p>
                                            <p class="movie_option"><strong>Category: </strong><a href="#">Adventure</a>, <a href="#">Fantazy</a></p>
                                            <p class="movie_option"><strong>Release date: </strong>December 12, 1983</p>
                                            <p class="movie_option"><strong>Director: </strong><a href="#">suffered </a></p>
                                            <p class="movie_option"><strong>Actors: </strong><a href="#">anything</a>, <a href="#">Lorem Ipsum</a>, <a href="#"> discovered</a>, <a href="#"> Virginia</a>, <a href="#"> Virginia</a>, <a href="#">variations</a>, <a href="#">variations</a>, <a href="#">variations</a>, <a href="#"> Virginia</a> <a href="#">...</a></p>
                                            <p class="movie_option"><strong>Age restriction: </strong>13</p>
                                            <Link to='/home/:id/review' ><div class="down_btn" className="button" class="btn1" ><span className="spann">Reviews</span></div></Link>
                                        </div>

                                    </div>
                                ) : location.pathname == `/home/tt0086191` ? (
                                    <div>
                                        <div class="grid images_3_of_2">
                                            <div class="movie_image" >
                                                <img src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" class="img-responsive" alt="" />
                                            </div>
                                        </div>
                                        <div class="desc1 span_3_of_2" className="sectionA">


                                            <p class="movie_option"><strong>Country: </strong><a href="#">established</a>, <a href="#">USA</a></p>
                                            <p class="movie_option">{location.pathname}</p>
                                            <p class="movie_option"><strong>Category: </strong><a href="#">Adventure</a>, <a href="#">Fantazy</a></p>
                                            <p class="movie_option"><strong>Release date: </strong>December 12, 1983</p>
                                            <p class="movie_option"><strong>Director: </strong><a href="#">suffered </a></p>
                                            <p class="movie_option"><strong>Actors: </strong><a href="#">anything</a>, <a href="#">Lorem Ipsum</a>, <a href="#"> discovered</a>, <a href="#"> Virginia</a>, <a href="#"> Virginia</a>, <a href="#">variations</a>, <a href="#">variations</a>, <a href="#">variations</a>, <a href="#"> Virginia</a> <a href="#">...</a></p>
                                            <p class="movie_option"><strong>Age restriction: </strong>13</p>
                                            <Link to='/home/:id/review' ><div class="down_btn" className="button" class="btn1" ><span className="spann">Reviews</span></div></Link>
                                        </div>
                                    </div>
                                ) : location.pathname == `/home/tt0086192` ? (
                                    <div>
                                        <div class="grid images_3_of_2">
                                            <div class="movie_image" >
                                                <img src="https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" class="img-responsive" alt="" />
                                            </div>
                                        </div>
                                        <div class="desc1 span_3_of_2" className="sectionA">


                                            <p class="movie_option"><strong>Country: </strong><a href="#">established</a>, <a href="#">USA</a></p>
                                            <p class="movie_option">{location.pathname}</p>
                                            <p class="movie_option"><strong>Category: </strong><a href="#">Adventure</a>, <a href="#">Fantazy</a></p>
                                            <p class="movie_option"><strong>Release date: </strong>December 12, 1983</p>
                                            <p class="movie_option"><strong>Director: </strong><a href="#">suffered </a></p>
                                            <p class="movie_option"><strong>Actors: </strong><a href="#">anything</a>, <a href="#">Lorem Ipsum</a>, <a href="#"> discovered</a>, <a href="#"> Virginia</a>, <a href="#"> Virginia</a>, <a href="#">variations</a>, <a href="#">variations</a>, <a href="#">variations</a>, <a href="#"> Virginia</a> <a href="#">...</a></p>
                                            <p class="movie_option"><strong>Age restriction: </strong>13</p>
                                            <Link to='/home/:id/review' ><div class="down_btn" className="button" class="btn1" ><span className="spann">Reviews</span></div></Link>
                                        </div>
                                    </div>) : null}



                                
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default MovieDetail;
