import React from "react";
import m from './Messages.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={m.dialog}>
            <NavLink to={`/messages/${props.id}`} activeClassName={m.activeLink}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={m.message}>
            {props.message}
        </div>
    )
}


const Messages = () => { 

    let dialogsData = [
        {id: 1, name: 'Alena'},
        {id: 2, name: 'Mom'},
        {id: 3, name: 'Vasya'},
        {id: 4, name: 'Timur'},
        {id: 5, name: 'Dima'},
        {id: 6, name: 'Denis'},
    ]

    let messagesData = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'how are you'},
        {id: 3, message: 'YO'},
        {id: 4, message: 'fuck'},
        {id: 5, message: 'you'},
        {id: 6, message: 'YO'},
    ]

    let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

    let messageElements = messagesData.map( message => <Message id={message.id} message={message.message} /> );

    return (
        <div className={m.dialogs}>
            <div className={m.dialogItems}>
                {dialogsElements}
            </div>
            <div className={m.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Messages;