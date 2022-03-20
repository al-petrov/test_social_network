import React from "react";
import { NavLink } from "react-router-dom";
import s from './Badge.module.css';

const Badge = (props) => {
    const userName = props.userName || props.login
    return (
        <NavLink to={'/settings'}>{ userName }</NavLink>
        )
}

export default Badge;