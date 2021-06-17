import { CardDeck,Card, CardColumns,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './css/List.css';
import React from 'react';

class MovieList extends React.Component {
    render() {
        
      return ( 
        <div>
                 
        <Card className="card">
            <Card.Img  src={`https://image.tmdb.org/t/p/w500${this.props.Poster}`} className="img"/>
            <Card.Body>
                <Card.Text>{this.props.Title}</Card.Text>
                <Card.Text>
                    {this.props.Year}<br/>
                    {this.props.Type}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="wrapper" >
            <Link to={`/home/${this.props.imdbID}`}> <Button  className="button2">Click for more Deatil</Button> </Link>
            
            </Card.Footer>
        </Card>
</div>
       );
    }
  }
  
  export default MovieList;
