import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
import myIcon from "./myIcon.png";
import Badge from "./UserBadge/Badge";



const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={myIcon}></img>
            {props.isAuth ?
                <div className={s.loginBlock}>
                    <Badge {...props} />
                </div> :
                <div className={s.loginBlock}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>}
        </header>)
}

export default Header;