import React from 'react';
import PropTypes from 'prop-types';

import './FilmCard.styles.scss';

const FilmCard = ({title, poster_path, release_date, vote_average, overview, genres}) => (
  <div className="card">
    <img src={poster_path} alt={title} className="card__image"/>
    <div className="card__meta">
      <h2 className="card__title">{title} ({release_date})</h2>
      <p className="card__user-score">{vote_average * 10}%</p>
      
      <div className="card__group">
        <h3 className="card__subtitle">Overview</h3>
        <p className="card__overview">{!!overview ? overview : `Извините, описание не найдено`}</p> 
      </div>

      <div className="card__group">
        <h3 className="card__subtitle">Genres</h3>
        <p className="card__overview">{genres}</p>
      </div>
    </div>
  </div>
);

FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired, //может быть пустой строкой
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  poster_path: PropTypes.string.isRequired,
};

export default FilmCard;
