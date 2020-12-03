import React, { Component } from 'react';
import api from '../../../services/apiService';
import './Cast.styles.scss';

export default class Cast extends Component {

  state = {
    cast: null
  }

  componentDidMount(){
    const id = this.props.match.params.movieId;
    api.getCast(id).then( cast => this.setState({cast}));
  }


  render() {
    const {cast} = this.state
    return (
      <ul className="cast">
        {(cast && cast.length) ? cast.map( ({id, name, profile_path, character}) => 
          <li className="cast__item" key={id}>
              <img className="cast__image" src={profile_path} alt={name} />
              <p className="cast__name">{name}</p>
              <p className="cast__character">{character}</p>
          </li>) :
          <li>
            There are no cast found
          </li>
          }

      </ul>
    );
  }

} 