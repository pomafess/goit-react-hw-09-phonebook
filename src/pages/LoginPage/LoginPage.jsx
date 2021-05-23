import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';

import { logIn } from '../../redux/auth/auth-operations';
import useForm from '../../shared/hooks/useForm';
import FormField from '../../shared/components/FormField';
import {fields} from './fields';

import s from './LoginPage.module.css';

const initialState = {
    name: '',
    number: '',
};

const LoginPage = () => {

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
             <FormField {...fields.email} value={data.email} onChange={handleChange} className={s.input} />
     
          </label>

          <label className={s.label}>
            Password
              <FormField {...fields.password} value={data.password} onChange={handleChange} className={s.input} />
        
          </label>

          <button type="submit" className={s.buttonForm}>Войти</button>
        </form>
      </div>
    );
 
}


export default LoginPage;