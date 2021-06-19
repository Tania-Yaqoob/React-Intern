import { CardDeck, Card, CardColumns, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/List.css';
import React from 'react';


class MovieList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            moviesFilter: [this.props.list]
        }
    }
    moviesFilter = (e) => {
        if (e.target.value == "1977") {
            var filteredData = this.props.list.filter((data) => {
                return data.Year == "1977"
            })
        }
        if (e.target.value == "1980") {
            var filteredData = this.props.list.filter((data) => {
                return data.Year == "1980"
            })
        }
        if (e.target.value == "1983") {
            var filteredData = this.props.list.filter((data) => {
                return data.Year == "1983"
            })
        }
        

        this.setState({
            ...this.state,
            moviesFilter: filteredData
        })
    }
    render() {

        return (
            <div>

                <div className="filter">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="1977" id="flexCheckDefault" onChange={this.moviesFilter}/>
                        <label class="form-check-label" for="flexCheckDefault">
                            1977
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="1980" id="flexCheckChecked" onChange={this.moviesFilter}/>
                        <label class="form-check-label" for="flexCheckChecked">
                            1980
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="1983" id="flexCheckChecked" onChange={this.moviesFilter}/>
                        <label class="form-check-label" for="flexCheckChecked">
                            1983
                        </label>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        
                        {this.props.list.map(data =>

                            <Card className="card">
                                <Card.Img src={data.Poster} className="img" />
                                <Card.Body>
                                    <Card.Text>{data.Title}</Card.Text>
                                    <Card.Text>
                                        {data.Year}<br />
                                        {data.Type}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="wrapper" >
                                    <Link to={`/home/${data.imdbID}`}> <Button className="button2">Click for more Deatil</Button> </Link>

                                </Card.Footer>
                            </Card>
                        )}

                    </div>
                </div>

            </div>
        );
    }
}

export default MovieList;
