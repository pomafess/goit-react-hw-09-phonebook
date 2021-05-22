import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { getIsAuthenticated } from '../../redux/auth/selectors';

import s from './Navbar.module.css';

const Navbar = ({ isAuthenticated }) => (
  <header className={s.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navbar);