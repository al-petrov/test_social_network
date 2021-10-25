import React from "react";
import DialogItem from "./Dialog/Dialog";
import m from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogsElements = props.data.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    return (
        <div className={m.dialogItems}>
            {dialogsElements}
        </div>
    )
}

export default Dialogs;