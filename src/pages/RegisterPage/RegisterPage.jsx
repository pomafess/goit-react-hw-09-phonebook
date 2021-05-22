import React, { Component } from 'react';
import { connect } from 'react-redux';

import {register} from '../../redux/auth/auth-operations'

import s from '../LoginPage/LoginPage.module.css'

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Страница регистрации</h1>

        <form
          onSubmit={this.handleSubmit}
          className={s.form}
          autoComplete="off"
        >
          <label className={s.label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className={s.input}
            />
          </label>

          <label className={s.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={s.input}
            />
          </label>

          <label className={s.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={s.input}
            />
          </label>

          <button type="submit"  className={s.buttonForm}>Зарегистрироваться</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);