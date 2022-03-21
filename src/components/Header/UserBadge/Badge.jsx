import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Badge.module.css';

const Badge = props => {
  const userName = props.userName || props.login;
  return (
    <div>
      <img src={props.img}></img>
      <NavLink to={'/settings'}>{userName}</NavLink>
    </div>
  );
};

export default Badge;
