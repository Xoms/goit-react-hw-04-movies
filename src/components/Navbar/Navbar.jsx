import React from 'react';
import {NavLink} from 'react-router-dom';

import Container from '../shared/Container'
import './Navbar.styles.scss';

const Navbar = (props) => (
  <Container>
  <ul className="navbar">
    <li className="navbar-item">
      <NavLink to='/' exact
        className="nav-link" 
        activeClassName="nav-link--active">Home
      </NavLink>
    </li>
    <li className="navbar-item">
      <NavLink to='/movies'
        className="nav-link" 
        activeClassName="nav-link--active">Movies
      </NavLink>
    </li>
  </ul>
  </Container>
);

export default Navbar;
