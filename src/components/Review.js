
import React from "react";


export default class Reviews extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      moviesReview: [{
        Title: 'Star Wars: Episode IV - A New Hope of Star',
        Year: '1977',
        imdbID: 'tt0076759',
        language:'en',
        Type: 'movie',
        overview:'Good',
        recommendation:'recommend',
        author:'harry',
      },
      {
        Title: 'Star Wars:Episode V-The Empire Strikes back',
        Year: '1980',
        imdbID: 'tt0080684',
        language:'en',
        Type: 'movie',
        overview:'Too Good',
        recommendation:'recommend',
        author:'Ali',
      },
      {
        Title: 'Star Wars: Episode VI - Return of the Jedi',
        Year: '1983',
        imdbID: 'tt0086190',
        language:'en',
        Type: 'movie',
        overview:'bad',
        recommendation:'Not recommend',
        author:'Umer',
      }]
    }
  }
 

  render() {

    const { moviesReview } = this.state
    const moviesId = this.props.match.params.id
    const data = moviesReview.find(list => list.imdbID === moviesId)
    
    return (
      <table style={{width:"100%"}}>
        <tr>
          <th>Author</th>
          <th>Recommendation</th>
          <th>Views</th>
        </tr>
        <tr>
          <td>{data.author}</td>
          <td>{data.recommendation}</td>
          <td>{moviesReview.overview}</td>
        </tr>

      </table>
    );
  }
}