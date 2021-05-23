import React from 'react';
import { NavLink } from 'react-router-dom';
import { shallowEqual, useSelector} from 'react-redux';

import s from './Navigation.module.css';

const Navigation = () => {
const isAuthenticated = useSelector(state => state.auth.token, shallowEqual)
return (
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
};

export default Navigation;