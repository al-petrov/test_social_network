import React from 'react';
import m from './Settings.module.css';
import * as axios from 'axios';
import { setAuthUserData } from '../../redux/auth-reducer';

let currentLoginInput = React.createRef();
let currentPaswordInput = React.createRef();
let currentUsernameInput = React.createRef();
let currentCountryInput = React.createRef();
let currentStatusInput = React.createRef();
let currentImageInput = React.createRef();

const Settings = props => {
  return (
    <div className={m.loginComponent}>
      <div className={m.loginBlock}>
        {/* <div className={m.}> */}
        <div className={m.textLogin}>login:</div>
        <input ref={currentLoginInput} className={m.inputLogin} value="fgd" />
        <div className={m.textLogin}>username:</div>
        <input ref={currentUsernameInput} className={m.inputLogin} value={props.userName} />
        <div className={m.textLogin}>country:</div>
        <input ref={currentCountryInput} className={m.inputLogin} value={props.country} />

        <div className={m.textLogin}>status:</div>
        <input ref={currentStatusInput} className={m.inputLogin} value={props.userStatus} />
        <div className={m.textLogin}>image:</div>
        <input ref={currentImageInput} className={m.inputLogin} value={props.userImg} />

        <div className={m.textLogin}>password:</div>
        <input type={'password'} ref={currentPaswordInput} className={m.inputLogin} />
        <button
          onClick={() => {
            axios
              .put(
                `http://barabulka.site:8080/api/user`,
                {
                  id: props.myID,
                  username: currentUsernameInput.current.value,
                  country: currentCountryInput.current.value,
                  userstatus: currentStatusInput.current.value,
                  login: currentLoginInput.current.value,
                  img: currentImageInput.current.value,
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
                  this.props.history.push('/login');
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

export default Settings;
