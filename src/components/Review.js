
import React, { useState } from "react";
import axios from 'axios';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      moviesReview: []
    }
  }
  componentDidMount() {
    const moviesId = this.props.match.params.id
    console.log(moviesId)
    axios.get(`
      https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=29d62274e14964e04e0a98c5c473c7b1&language=en-US&page=1`)
      .then(res => {
        console.log(res)
        this.setState({ moviesReview: res.data.results[0] })
      })

      .catch(error => {
        console.log(error);
      })
  }

  render() {

    const { moviesReview } = this.state
    console.log(moviesReview.author)
    return (
      <table style={{width:"100%"}}>
        <tr>
          <th>Author</th>
          <th>Content</th>
          <th>Time</th>
        </tr>
        <tr>
          <td>{moviesReview.author}</td>
          <td>{moviesReview.content}</td>
          <td>{moviesReview.created_at}</td>
        </tr>

      </table>
    );
  }
}