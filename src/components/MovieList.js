import { CardDeck,Card, CardColumns,Button } from 'react-bootstrap';
import './List.css'
function MovieList(props) {
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
                    <Card.Footer className="wrapper">
                    <Button className="button">Add to favourites</Button>
                    </Card.Footer>
                </Card>
        </div>
    );
}

export default MovieList;