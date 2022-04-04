import React, { useEffect, useRef } from 'react';
import m from './Messages.module.css';
import Message from './Message/Message';
import { AddSymbolNewMesssageActionCreator, SendMessageActionCreator } from '../../../redux/dialogs-reducer';
import { useRouteMatch } from 'react-router';
import { Field } from 'redux-form';
import { Input } from '../../Common/FormsControls/FormsControl';
import { maxLengthCreator } from '../../../utils/validators';
import { reduxForm } from 'redux-form';

let maxLength255 = maxLengthCreator(255);

const NewMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={m.newMessageForm}>
        <Field
          className={m.newMessageField}
          placeholder={'message text'}
          name={'newMessageText'}
          component={Input}
          validate={maxLength255}
        />
        <button className={m.newMessage}>send</button>
      </div>
    </form>
  );
};

const NewMessageReduxForm = reduxForm({ form: 'newMessageForm' })(NewMessageForm);

const Messages = props => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [props.state.messagesData]);

  let getter = props.match.params.userId;

  let findMessage = '';
  for (let item of props.state.newMessages) {
    if (item.getterId == getter) {
      findMessage = item.message;
      break;
    }
  }

  let messageElements = props.state.messagesData.map(function (message) {
    let whoIs = message.sender_id == props.myID ? 'myMessages' : 'yourMessages';
    return (
      <div className={m[whoIs]}>
        <Message {...message} />
      </div>
    );
  });

  let onSubmit = formData => {
    if (formData.newMessageText) {
      props.sendMessage(props.myID, props.state.getterId, formData.newMessageText);
      formData.newMessageText = '';
    }
  };

  return (
    <div className={m.messages}>
      <div className={m.messageList}>
        <div id={'myPage'} className={m.justifier}>
          {messageElements}
        </div>
        <div ref={messagesEndRef} />
      </div>
      <NewMessageReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Messages;
