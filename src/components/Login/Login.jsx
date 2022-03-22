import React from 'react';
import m from './Login.module.css';
import * as axios from 'axios';
import { setAuthUserData } from '../../redux/auth-reducer';

let currentLoginInput = React.createRef();
let currentPaswordInput = React.createRef();
const Login = props => {
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
            axios
              .post(
                `http://barabulka.site:8080/api/login`,
                {
                  login: currentLoginInput.current.value,
                  pas: currentPaswordInput.current.value,
                },
                {
                  withCredentials: true,
                },
              )
              .then(response => {
                if (response.data.isLogined === true) {
                  props.setAuthUserData(
                    response.data.id,
                    response.data.login,
                    response.data.username,
                    response.data.img,
                    response.data.userstatus,
                  );
                  props.history.push('/profile');
                }
                if (response.data.isLogined === false) {
                  alert(response.data.reason);
                  // this.props.history.push("/login")
                  return;
                }
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.users);
                this.props.setTotalUsersCount(response.data.count);
              })
              .catch(err => {
                console.log('hi');
                console.log(err.response);
              });
          }}
          className={m.buttonSend}
        >
          ENTER
        </button>
      </div>
    </div>
  );
};

export default Login;
