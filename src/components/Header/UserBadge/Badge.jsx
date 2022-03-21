import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Badge.module.css';

const Badge = props => {
  debugger;
  const userName = props.userName || props.login;
  return (
    <div className={s.badge}>
      <img className={s.badge} src={props.userImg}></img>
      <NavLink className={s.name} to={'/settings'}>
        {userName}
      </NavLink>
    </div>
  );
};

export default Badge;
