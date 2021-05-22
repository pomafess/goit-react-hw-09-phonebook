import React, {memo} from 'react';
import { useDispatch, shallowEqual, useSelector} from 'react-redux';
import { logOut } from '../../../redux/auth/auth-operations';
import defaultAvatar from './avatar.jpg';

import s from './UserMenu.module.css'

const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name, shallowEqual)
  const avatar = defaultAvatar;
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logOut());

  return (
  <div className={s.container}>
    <img src={avatar} alt="" width="32" height="32" className={s.avatar} />
    <span className={s.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout} className={s.buttonForm}>
      Logout
    </button>
    </div>
  )
};

export default memo(UserMenu);