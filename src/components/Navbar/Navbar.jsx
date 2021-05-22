import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';


import s from './Navbar.module.css';

const Navbar = () => {
const isAuthenticated = useSelector(state => state.auth.token, shallowEqual)

  return (
    <header className={s.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  )
}

export default Navbar;