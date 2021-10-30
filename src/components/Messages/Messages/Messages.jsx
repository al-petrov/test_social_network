import React from "react";
import m from './Messages.module.css';
import Message from "./Message/Message";
import { AddSymbolNewMesssageActionCreator, SendMessageActionCreator } from "../../../redux/dialogs-reducer";
import { useRouteMatch } from "react-router";

const Messages = (props) => {
    
    let match = useRouteMatch();

    let getter = window.location.pathname.substring(10, window.location.pathname.length);

    debugger;
    let findMessage = '';
    for (let item of props.state.newMessages) {
        if (item.getterId == getter) {
            findMessage = item.message;
            break;
        }
    }

    let sendMessage = () => {
        props.sendMessage(currentMessageInput.current.value, getter);
        // let text = currentMessageInput.current.value;
        // debugger;
        // props.dispatch(SendMessageActionCreator(text, getter));
    }
    let currentMessages = [];
    for (let item of props.state.messagesData) {
        if (item.senderId === getter && item.getterId === props.state.myID ||
            item.senderId === props.state.myID && item.getterId === getter) {
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

        let whoIs = (message.senderId === props.state.myID) ? "myMessages" : "yourMessages";
        return (
            <div className={m[whoIs]}>
                <Message id={message.id} message={message.message} />
            </div>
        )
    });

    let onMessageChange = () => {
        props.messageChanged(AddSymbolNewMesssageActionCreator(currentMessageInput.current.value, getter))
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