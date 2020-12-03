import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import api from '../../services/apiService';
import FilmCard from '../../components/MovieDetails/FilmCard';
import Cast from '../../components/MovieDetails/Cast'
import Reviews from '../../components/MovieDetails/Reviews/Reviews';

import './MoviesDetails.styles.scss';


export default class MoviesDetails extends Component{
state ={
  movie: null,
  isLoading: false,
  errMsg: null
}

componentDidMount(){
  this.setState({isLoading: true})
  api.getMovieById(this.props.match.params.movieId)
    .then( movie => {
      this.setState({movie})
    })
    .catch(err => this.setState({errMsg: err.message}))
    .finally(() => this.setState({isLoading: false}));
}

handleGoBack = () => {
  const {location, history} = this.props;

  if (!location.state){
    history.push('/');
    return;
  }
  history.goBack();
}

render(){
  const {movie} = this.state;
  const {match} = this.props
   return (
      <section className="movie-details">
        <button className="btn btn-back" onClick={this.handleGoBack}>
           go back
        </button>

        <div className="movie-details__card">
          {movie && <FilmCard  {...movie}/>}
        </div>  

        <div className="movie-details__additional">
          <h2>Additional info</h2>
          <ul>
            <Link to={`${match.url}/cast`}>Cast</Link>
          </ul>
          <ul>
            <Link to={`${match.url}/reviews`}>Reviews</Link>
          </ul>
        </div>

        <Route path={`${match.path}/cast`} component={Cast}/>
        <Route path={`${match.path}/reviews`} component={Reviews}/>
      </section>
    )
  }
}
