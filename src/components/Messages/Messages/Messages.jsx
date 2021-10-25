import React from "react";
import m from './Messages.module.css';
import Message from "./Message/Message";
import { BrowserRouter, Route } from "react-router-dom";

const Messages = (props) => {



    let sendMessage = () => {
        let text = currentMessageInput.current.value;
        alert(text);
    }

    let currentMessages = [];

    for (let item of props.data) {
        if (item.senderId === props.senderID && item.getterId === props.myID ||
            item.senderId === props.myID && item.getterId === props.senderID) {
            currentMessages.push(item);
        }
    }

    currentMessages.sort(function (a, b) {
        if (a.date > b.date) {
            return 1;
        }
        if (a.date < b.date) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    }
    );

    let messageElements = currentMessages.map(function (message) {

        let whoIs = (message.senderId === props.myID) ? "myMessages" : "yourMessages";
        return (
            <div className={m[whoIs]}>
                <Message id={message.id} message={message.message} />
            </div>
        )
    });
    // let messageElements = props.data.map(message => <Message id={message.id} message={message.message} />);

    // let messageElements = props.data.map(message => <Route path={'/messages/' + message.senderId} 
    //    render={ () => <Message id={message.id} message={message.message} />} />);


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