import React from "react";
import m from './Dialog.module.css';
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={m.dialog}>
            <NavLink to={`/messages/${props.id}`} activeClassName={m.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;