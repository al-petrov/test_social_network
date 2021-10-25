import React from "react";
import m from './MyMessages.module.css';
import Messages from "./Messages/Messages";
import Dialogs from "./Dialogs/Dialogs";

const MyMessages = (props) => {

    let myDataMessage = props.data.messagesData;
    let myDataDialogs = props.data.dialogsData;

    let senderID = window.location.pathname.substring(10, window.location.pathname.length);

    return (
        <div className={m.dialogs}>
            <div className={m.dialogsBar}>
                <Dialogs data={myDataDialogs} />
            </div>
            <div className={m.messages}>
                <Messages data={myDataMessage} senderID={senderID} myID={props.myID} />
            </div>
        </div>
    )
}

export default MyMessages;