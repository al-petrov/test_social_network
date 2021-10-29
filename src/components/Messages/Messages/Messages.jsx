import React from "react";
import m from './Messages.module.css';
import Message from "./Message/Message";

const ActionSendMessageCreator = (text, getter) => {
    return ({
        type: "SEND-MESSAGE",
        getterId: getter,
        message: text,
    }
    )
}

const ActionAddSimbolNewMesssageCreator = (text, getter) => {
    return ({
        type: "ADD-SIMBOL-NEW-MESSAGE",
        getter: getter,
        newText: text,
    }
    )
}

const Messages = (props) => {

    let getter = window.location.pathname.substring(10, window.location.pathname.length);

    debugger;
    let findMessage = '';
    for (let item of props.newMessages) {
        if (item.getterId == getter) {
            findMessage = item.message;
            break;
        }
    }

    let sendMessage = () => {
        let text = currentMessageInput.current.value;
        debugger;
        props.dispatch(ActionSendMessageCreator(text, getter));
    }
    let currentMessages = [];
    for (let item of props.data) {
        if (item.senderId === getter && item.getterId === props.myID ||
            item.senderId === props.myID && item.getterId === getter) {
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
    let onMessageChange = () => {
        let text = currentMessageInput.current.value;
        props.dispatch(ActionAddSimbolNewMesssageCreator(text, getter))
    }

    let currentMessageInput = React.createRef();
    return (
        <div className={m.messages}>
            <div className={m.messageList}>
                <div id={'myPage'} className={m.justifier}>
                    {messageElements}
                </div>
            </div>
            <div>
                <textarea onChange={onMessageChange} ref={currentMessageInput} className={m.newMessageField} value={findMessage} />
                {/* <div className={m.newMessage}> */}
                <button onClick={sendMessage} className={m.newMessage}>send</button>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Messages;