import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../../redux/auth/selectors';

import s from './Navigation.module.css';


const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact
      className={s.link}
    activeClassName={s.activeLink} 
    >
      Главная
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Телефонная книга
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);