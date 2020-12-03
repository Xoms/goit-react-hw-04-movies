import React, { Component } from 'react';
import api from '../../../services/apiService';

import './Reviews.styles.scss';

export default class Reviews extends Component {

  state = {
    reviews: null
  }

  componentDidMount(){
    const id = this.props.match.params.movieId;
    api.getReviews(id).then( reviews => this.setState({reviews}));
  }


  render() {
    const {reviews} = this.state
    return (
      <ul className="reviews">
        {(reviews && reviews.length) ? reviews.map( ({id, author, content}) => 
          <li className="reviews__item" key={id}>
              <p className="reviews__author">{author}</p>
              <p className="reviews__content">{content}</p>
          </li>) :
          <li>
            There are no reviews yet
          </li>
          }

      </ul>
    );
  }

} 


