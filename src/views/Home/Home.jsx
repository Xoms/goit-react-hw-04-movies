import React, { Component } from 'react';

import api from '../../services/apiService';
import FilmsList from '../../components/FilmsList';
import Container from '../../components/shared/Container';


import  './Home.styles.scss';

export default class Home extends Component {
  
  state = {
    movies: [],
  }

  componentDidMount(){
    api.getTrends(1)
      .then( res => {
        console.log(res);
        this.setState({movies: res})});
  }
  
  render () {
    const {movies} = this.state
    return (
      <section>
        <Container>
        <h2 className="section-title"> Trends </h2>
        <FilmsList movies={movies}/>    
      </Container>
      </section>      
    )    
  }

} 


