import { CardDeck,Card, CardColumns,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './css/List.css';
function MovieList(props,{history}) {
    
    return (
        <div>
                 
                <Card className="card">
                    <Card.Img  src={props.Poster} className="img"/>
                    <Card.Body>
                        <Card.Text>{props.Title}</Card.Text>
                        <Card.Text>
                            {props.Year}<br/>
                            {props.Type}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="wrapper" >
                    <Link to={`/home/${props.imdbID}`}> <Button  className="button2">Click for more Deatil</Button> </Link>
                    
                    </Card.Footer>
                </Card>
        </div>
    );
}

export default MovieList;