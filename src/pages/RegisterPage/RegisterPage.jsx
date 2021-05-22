import React, {useCallback} from 'react';
import { useDispatch } from 'react-redux';

import {register} from '../../redux/auth/auth-operations'
import useForm from '../../shared/hooks/useForm'

import s from '../LoginPage/LoginPage.module.css'

const RegisterPage = () => {
  const initialState = {
  name: "",
  email: "",
  password: "",
  };
  
  const dispatch = useDispatch();

  const onSubmit = useCallback((body) => dispatch(register(body)), [dispatch]);
    
  const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });


    return (
      <div>
        <h1>Страница регистрации</h1>

        <form
          onSubmit={handleSubmit}
          className={s.form}
          autoComplete="off"
        >
          <label className={s.label}>
            Name
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              className={s.input}
            />
          </label>

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

          <button type="submit"  className={s.buttonForm}>Зарегистрироваться</button>
        </form>
      </div>
    );
  }


export default RegisterPage;