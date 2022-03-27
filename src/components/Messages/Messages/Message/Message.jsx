import React from 'react';
import m from './Message.module.css';

const Message = props => {
  let options = {
    weekday: 'short',
    year: '2-digit',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  };
  let date = new Date(props.senddate).toLocaleDateString('ru', options);
  return (
    <div className={m.message}>
      <div>{props.messagetext}</div>
      <div>{date}</div>
    </div>
  );
};

export default Message;
