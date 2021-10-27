import React from "react";
import s from './Header.module.css';
import myIcon from "./myIcon.png";

const Header = () => {
    return (
    <header className={s.header}>
        <img src={myIcon}></img>
    </header>)
}

export default Header;