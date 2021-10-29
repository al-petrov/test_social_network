import React from "react";
import m from './MyMessages.module.css';
import Messages from "./Messages/Messages";
import Dialogs from "./Dialogs/Dialogs";

const MyMessages = (props) => {
    
    return (
        <div className={m.myMessages}>
            <div className={m.bacgr}>
            <div className={m.dialogsBar}>
                <Dialogs data={props.state.messages.dialogsData} />
            </div>
            </div>
            <div className={m.messages}>
                <Messages dispatch={props.dispatch} state={props.state.messages}  />
            </div>
        </div>
    )
}

export default MyMessages;