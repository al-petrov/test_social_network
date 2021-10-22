import React from "react";
import m from './Messages.module.css';
import Message from "./Message/Message";

const Messages = (props) => {

    // let messageElements = messagesData.map(message => <Message id={message.id} message={message.message} />);
    let messageElements = props.data.map(message => <Message id={message.id} message={message.message} />);

    return (
        <div className={m.messages}>
            {messageElements}
        </div>
    )
}

export default Messages;