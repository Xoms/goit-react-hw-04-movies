import React, { Component, lazy, Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Loader from '../../components/shared/Loader';
import api from '../../services/apiService';
import FilmCard from '../../components/MovieDetails/FilmCard';
import Button from '../../components/shared/Button'

// import Cast from "../../components/MovieDetails/Cast";
// import Reviews from "../../components/MovieDetails/Reviews"
import './MoviesDetails.styles.scss';
import Container from '../../components/shared/Container';


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
  const {match} = this.props;
  console.log(match);
   return (
      <section className="movie-details">
        <Container>
          <Button className="btn btn-back" onClick={this.handleGoBack} caption="Go back" />

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
          <Suspense fallback={<Loader/>} >
            <Switch>
              <Route path={`${match.path}/cast`} exact component={lazy(() => import("../../components/MovieDetails/Cast"))}/>
              <Route path={`${match.path}/reviews`} exact component={lazy(() => import("../../components/MovieDetails/Reviews"))}/>
            </Switch>
          </Suspense>
          {/* <Switch>
            <Route path={`/movies/:movieId/cast`} exact component={Cast}/>
            <Route path={`/movies/:movieId/reviews`} exact component={Reviews}/>
          </Switch> */}
        </Container>
      </section>
    )
  }
}
