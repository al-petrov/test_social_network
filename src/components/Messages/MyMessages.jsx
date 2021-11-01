import React from "react";
import m from './MyMessages.module.css';
import DialogsContainer from "./Dialogs/DialogsContainer";
import MessagesContainer from "./Messages/MessagesContainer";

const MyMessages = (props) => {

    return (
        <div className={m.myMessages}>
            <div className={m.bacgr}>
                <div className={m.dialogsBar}>
                    <DialogsContainer />
                </div>
            </div>
            <div className={m.messages}>
                <MessagesContainer />
            </div>
        </div>
    )
}

export default MyMessages;