import React from "react";
import n from './navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {

    let menuItems = [
        

    ]

    return (
        <nav className={n.nav}>
            <div className={n.item} activeClassName={n.active}>
                {/* <div className={n.container}> */}
                <NavLink to='/profile' activeClassName={n.activeLink}><div className={n.test}>Profile</div></NavLink>
                {/* </div> */}
            </div>
            <div className={n.item}>
                <NavLink to='/messages' activeClassName={n.activeLink}><div className={n.test}>Messages</div></NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/news' activeClassName={n.activeLink}><div className={n.test}>News</div></NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/music' activeClassName={n.activeLink}><div className={n.test}>Music</div></NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/settings' activeClassName={n.activeLink}><div className={n.test}>Settings</div></NavLink>
            </div>
        </nav>)
}

export default Navbar;