import React from 'react';
import m from './Login.module.css';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';

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
