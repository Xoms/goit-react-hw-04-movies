import React, { Component } from 'react';

import qs from '../../helpers/getQueryString'; 
import api from '../../services/apiService';

import SearchBar from '../../components/Searchbar';
import FilmsList from '../../components/FilmsList';
import Container from '../../components/shared/Container';

import './Movies.styles.scss';


export default class Movies extends Component {
  state = {
    movies: null
  }

  componentDidMount(){
    const {query} = qs(this.props.location.search);
    if (query) {
      this.getMoviesByQuery(query)
    }
  }

  componentDidUpdate(prevProps, prevState){
    
    const {query: prevQuery} = qs(prevProps.location.search);
    const {query: curQuery} = qs(this.props.location.search);
    
    if (prevQuery !== curQuery) {
      this.getMoviesByQuery(curQuery)
    }
  }

  getMoviesByQuery(query) {
    api.getMoviesByQuery(query)
        .then( ({movies}) => this.setState({movies}) )
  }

  onSearchSubmit = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`
    })
  }

  render(){
    const {movies} = this.state
    return(
      <> 
      <SearchBar onSubmit={this.onSearchSubmit} />
      <Container>
        {movies && <FilmsList movies={movies}/>}
      </Container>
      </>
    );
  }
}