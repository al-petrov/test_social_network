import React from "react";
import m from './Messages.module.css';
import Message from "./Message/Message";
import { BrowserRouter, Route } from "react-router-dom";

const Messages = (props) => {

    

    let sendMessage = () => {
        let text = currentMessageInput.current.value;
        alert(text);
    }

    let messageElements = props.data.map(message => <Message id={message.id} message={message.message} />);
    // let messageElements = props.data.map(message => <Message id={message.id} message={message.message} />);

    // let messageElements = props.data.map(message => <Route path={'/messages/' + message.senderId} render={ () => <Message id={message.id} message={message.message} />} />);

    let currentMessageInput = React.createRef();
    return (
        // <BrowserRouter>
        <div>
            <div className={m.messages}>
                {messageElements}
            </div>
            <textarea ref={currentMessageInput}></textarea>
            <div>
                <button onClick={sendMessage}>send</button>
            </div>
        </div>

        // </BrowserRouter>
    )
}

export default Messages;