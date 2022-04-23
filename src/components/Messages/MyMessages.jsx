import React from 'react';
import m from './MyMessages.module.css';
import Dialogs from './Dialogs/Dialogs';
import Messages from './Messages/Messages';
import ChooseUser from './ChooseUser';

const MyMessages = props => {
  return (
    <div className={m.myMessages}>
      <Dialogs {...props} />

      {props.myID && props.state.getterId ? (
        <div className={m.messages}>
          <Messages {...props} />
        </div>
      ) : (
        <ChooseUser />
      )}
    </div>
  );
};

export default MyMessages;
