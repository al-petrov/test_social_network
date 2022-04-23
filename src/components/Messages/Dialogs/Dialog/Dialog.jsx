import React from 'react';
import m from './Dialog.module.css';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const DialogItem = props => {
  return (
    <Menu.Item onClick={() => props.setMessageData(props.myID, props.id)} key={props.id} icon={<UserOutlined />}>
      <NavLink to={`/messages/${props.id || ''}`} activeClassName={m.activeLink}>
        {props.name}
      </NavLink>
    </Menu.Item>
  );
};

export default DialogItem;
// onClick={props.setMessageData(props.myID, props.id)}
