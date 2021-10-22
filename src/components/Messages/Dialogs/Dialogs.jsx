import React from "react";
import DialogItem from "./Dialog/Dialog";
import m from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Alena' },
        { id: 2, name: 'Mom' },
        { id: 3, name: 'Vasya' },
        { id: 4, name: 'Timur' },
        { id: 5, name: 'Dima' },
        { id: 6, name: 'Denis' },
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    return (
        <div className={m.dialogItems}>
            {dialogsElements}
        </div>
    )
}

export default Dialogs;