import React from 'react';
import PropTypes from 'prop-types';

import FilmsListItem from './FilmsListItem';


import './FilmsList.styles.scss';


const FilmsList = ({movies}) => {
  return (

    <ul className="films-list">
      { movies.map( ({id, ...rest}) =>  <FilmsListItem key={id} {...rest} link={id + ''} />) }
    </ul>
);
}

FilmsList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({

    })).isRequired,
};

export default FilmsList;
