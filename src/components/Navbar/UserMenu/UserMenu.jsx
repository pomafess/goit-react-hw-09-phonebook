import React from 'react';
import { connect } from 'react-redux';
import { getUserName } from '../../../redux/auth/selectors';
import { logOut } from '../../../redux/auth/auth-operations';
import defaultAvatar from './avatar.jpg';

import s from './UserMenu.module.css'

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={s.container}>
    <img src={avatar} alt="" width="32" height="32" className={s.avatar} />
    <span className={s.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}  className={s.buttonForm}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);