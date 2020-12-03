import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './FilmsListItem.styles.scss';

const FilmsListItem = (props) => {
  const {
    link, title
  } = props;

  
  return (
    <li className="film-list__item">
      <Link to={ {pathname: `movies/${link}`,
       state:{from: `movies/${link}`}}}>{title}</Link>
    </li>
  );
}

FilmsListItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FilmsListItem;
