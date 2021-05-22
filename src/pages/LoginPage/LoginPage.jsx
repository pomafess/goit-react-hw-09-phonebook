import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import { logIn } from '../../redux/auth/auth-operations';
import useForm from '../../shared/hooks/useForm';

import s from './LoginPage.module.css';

const LoginPage = () => {

   const initialState = {
        name: '',
        number: '',
    };

    const dispatch = useDispatch();
    const onSubmit = useCallback((data) => dispatch(logIn(data)), [dispatch]);
    const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });

    return (
      <div>
        <h1>Login</h1>
        <form
          onSubmit={handleSubmit}
          className={s.form}
          autoComplete="off"
        >
          <label className={s.label}>
            Email
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className={s.input}
            />
          </label>

          <label className={s.label}>
            Password
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className={s.input}
            />
          </label>

          <button type="submit" className={s.buttonForm}>Войти</button>
        </form>
      </div>
    );
 
}


export default LoginPage;