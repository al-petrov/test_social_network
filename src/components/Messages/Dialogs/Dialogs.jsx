import { UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import DialogItem from './Dialog/Dialog';
import m from './Dialogs.module.css';

const Dialogs = props => {
  let dialogsElements = props.state.dialogsData.map(dialog => (
    <Menu.Item
      onClick={() => props.setMessageData(props.myID, dialog.id)}
      key={props.id}
      icon={dialog.img ? <Avatar src={dialog.img} /> : <Avatar>{dialog.username[0]}</Avatar>}
    >
      <Link to={`/messages/${props.id || ''}`} activeClassName={m.activeLink}>
        {dialog.username}
      </Link>
    </Menu.Item>

    // <DialogItem
    //   name={dialog.username}
    //   id={dialog.id}
    //   myID={props.myID}
    //   getterId={props.state.getterId}
    //   setMessageData={props.setMessageData}
    // />
  ));
  return <Menu mode="inline">{dialogsElements}</Menu>;

  // return <div className={m.dialogItems}>{dialogsElements}</div>;
};

export default Dialogs;
