import React from "react";
import n from './navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                {/* <div className={n.container}> */}
                <NavLink to='/profile' activeClassName={n.activeLink}><div>Profile</div></NavLink>
                {/* </div> */}
            </div>
            <div className={`${n.item} ${n.active}`}>
                <NavLink to='/messages' activeClassName={n.activeLink}><div>Messages</div></NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/news' activeClassName={n.activeLink}><div>News</div></NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/music' activeClassName={n.activeLink}><div>Music</div></NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/settings' activeClassName={n.activeLink}><div>Settings</div></NavLink>
            </div>
        </nav>)
}

export default Navbar;