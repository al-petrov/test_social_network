import React from "react";
import m from './MyMessages.module.css';
import Messages from "./Messages/Messages";
import Dialogs from "./Dialogs/Dialogs";

const MyMessages = (props) => {

    let myDataMessage = props.data.messagesData;
    let myDataDialogs = props.data.dialogsData;
    let myNewMessages = props.data.newMessages;

    let senderID = window.location.pathname.substring(10, window.location.pathname.length);

    let findMessage = '';
    for (let item of myNewMessages) {
        if (item.getterId == senderID) {
            findMessage = item.message;
            break;
        }
    }    
    
    return (
        <div className={m.myMessages}>
            <div className={m.dialogsBar}>
                <Dialogs data={myDataDialogs} />
            </div>
            <div className={m.messages}>
                <Messages data={myDataMessage} senderID={senderID} myID={props.myID} addSimbolNewMessage = {props.addSimbolNewMessage} textNewMessages = {findMessage} sendMessage={props.sendMessage} />
            </div>
        </div>
    )
}

export default MyMessages;