import React from "react";
import m from './MyMessages.module.css';
import Messages from "./Messages/Messages";
import Dialogs from "./Dialogs/Dialogs";

const MyMessages = (props) => {

    let myDataMessage = props.data.messagesData;
    let myDataDialogs = props.data.dialogsData;

    return (
        <div className={m.dialogs}>
            <Dialogs data={myDataDialogs} />
            <Messages data={myDataMessage} />
        </div>
    )
}

export default MyMessages;