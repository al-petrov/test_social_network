import React from "react";
import m from './Messages.module.css';

const Messages = () => {
    return (
        <div className={m.dialogs}>
            <div className={m.dialogsItems}>
                <div className={m.dialog + ' ' + m.active}>
                    Алена
                </div>
                <div className={m.dialog}>
                    Мама
                </div>
                <div className={m.dialog}>
                    Вася
                </div>
                <div className={m.dialog}>
                    Костя
                </div>
                <div className={m.dialog}>
                    Дима
                </div>

            </div>
            <div className={m.messages}>
                <div className={m.message}>
                    hi
                </div>
                <div className={m.message}>
                    how are you
                </div>
            </div>
        </div>
    )
}

export default Messages;