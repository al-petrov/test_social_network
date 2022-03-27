import React from 'react';
import DialogItem from './Dialog/Dialog';
import m from './Dialogs.module.css';

const Dialogs = props => {
  let dialogsElements = props.state.dialogsData.map(dialog => (
    <DialogItem
      name={dialog.username}
      id={dialog.id}
      myID={props.myID}
      getterId={props.state.getterId}
      setMessageData={props.setMessageData}
    />
  ));

  return <div className={m.dialogItems}>{dialogsElements}</div>;
};

export default Dialogs;
