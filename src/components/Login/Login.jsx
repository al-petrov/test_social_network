import React from 'react';
import m from './Login.module.css';
import * as axios from 'axios';
import { setAuthUserData } from '../../redux/auth-reducer';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';

let currentLoginInput = React.createRef();
let currentPaswordInput = React.createRef();
const LoginOld = props => {
  return (
    <div className={m.loginComponent}>
      <div className={m.loginBlock}>
        {/* <div className={m.}> */}
        <div className={m.textLogin}>login:</div>
        <input ref={currentLoginInput} className={m.inputLogin} />
        <div className={m.textLogin}>password:</div>
        <input type={'password'} ref={currentPaswordInput} className={m.inputLogin} />
        <button
          onClick={() => {
            props.login();
          }}
          className={m.buttonSend}
        >
          ENTER
        </button>
      </div>
    </div>
  );
};

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={m.loginComponent}>
        <div className={m.loginBlock}>
          <h1 className={m.inputLogin}>Login</h1>
          <div className={m.textLogin}>
            <Field className={m.loginFields} placeholder={'login'} name={'login'} component={'input'} />
          </div>
          <div className={m.textLogin}>
            <Field
              className={m.loginFields}
              type={'password'}
              placeholder={'password'}
              name={'password'}
              component={'input'}
            />
          </div>
          <div className={m.textLogin}>
            <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
          </div>
          <div>
            <button className={m.buttonSend}>Login</button>
          </div>
        </div>
      </div>
    </form>
  );
};

const LodinReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    props.login(formData.login, formData.password, formData.rememberMe);
  };
  return (
    <div>
      <LodinReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
