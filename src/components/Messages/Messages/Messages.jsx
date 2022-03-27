import React from 'react';
import m from './Messages.module.css';
import Message from './Message/Message';
import { AddSymbolNewMesssageActionCreator, SendMessageActionCreator } from '../../../redux/dialogs-reducer';
import { useRouteMatch } from 'react-router';

const Messages = props => {
  // let getter = window.location.pathname.substring(10, window.location.pathname.length);
  let getter = props.match.params.userId;

  let findMessage = '';
  for (let item of props.state.newMessages) {
    if (item.getterId == getter) {
      findMessage = item.message;
      break;
    }
  }

  let sendMessage = () => {
    props.sendMessage(props.myID, props.state.getterId, currentMessageInput.current.value);
    // let text = currentMessageInput.current.value;
    //
    // props.dispatch(SendMessageActionCreator(text, getter));
  };

  let messageElements = props.state.messagesData.map(function (message) {
    let whoIs = message.sender_id == props.myID ? 'myMessages' : 'yourMessages';
    return (
      <div className={m[whoIs]}>
        <Message {...message} />
      </div>
    );
  });

  let onMessageChange = () => {
    props.messageChanged(currentMessageInput.current.value, getter);
  };

  let currentMessageInput = React.createRef();
  return (
    <div className={m.messages}>
      <div className={m.messageList}>
        <div id={'myPage'} className={m.justifier}>
          {messageElements}
        </div>
      </div>
      <div>
        <textarea
          onChange={onMessageChange}
          ref={currentMessageInput}
          className={m.newMessageField}
          value={findMessage}
        />
        {/* <div className={m.newMessage}> */}
        <button onClick={sendMessage} className={m.newMessage}>
          send
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Messages;
