import React, {useCallback} from 'react';
import { useDispatch } from 'react-redux';

import {register} from '../../redux/auth/auth-operations'
import useForm from '../../shared/hooks/useForm';
import {fields} from './fields';
import FormField from '../../shared/components/FormField';
import Button from '../../shared/components/Button'

import s from '../LoginPage/LoginPage.module.css'

const initialState = {
name: "",
email: "",
password: "",
};
const RegisterPage = () => {
  
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
            <FormField {...fields.name} value={data.name} onChange={handleChange} className={s.input} />
          </label>

          <label className={s.label}>
            Email
            <FormField {...fields.email} value={data.email} onChange={handleChange} className={s.input} />
          </label>

          <label className={s.label}>
            Password
             <FormField {...fields.password} value={data.password} onChange={handleChange} className={s.input} />
          </label>

          <Button type="submit">Зарегистрироваться</Button>
        </form>
      </div>
    );
  }


export default RegisterPage;