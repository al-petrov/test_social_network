import React from "react";
import m from './Messages.module.css';
import { NavLink } from "react-router-dom";

const Messages = () => {
    return (
        <div className={m.dialogs}>
            <div className={m.dialogItems}>
                <div className={m.dialog + ' ' + m.active}>
                    <NavLink to="/messages/1" activeClassName={m.activeLink}>Алена</NavLink>
                </div>
                <div className={m.dialog}>
                    <NavLink to="/messages/2" activeClassName={m.activeLink}>Мама</NavLink>                    
                </div>
                <div className={m.dialog}>
                    <NavLink to="/messages/3" activeClassName={m.activeLink}>Вася</NavLink>                
                </div>
                <div className={m.dialog}>
                    <NavLink to="/messages/4" activeClassName={m.activeLink}>Костя</NavLink>                    
                </div>
                <div className={m.dialog}>
                    <NavLink to="/messages/5" activeClassName={m.activeLink}>Дима</NavLink>      
                </div>
            </div>
            <div className={m.messages}>
                <div className={m.message}>
                    hi
                </div>
                <div className={m.message}>
                    how are you
                </div>
            </div>
        </div>
    )
}

export default Messages;