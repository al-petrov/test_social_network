import { Avatar, Col, Row, Space } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Badge.module.css';

const Badge = props => {
  const userName = props.userName || props.login;
  return (
    <Row>
      <Col span={3} offset={21}>
        <Space>
          <Avatar src={props.userImg} />
          <NavLink to={'/settings'}>{userName}</NavLink>
        </Space>
      </Col>
    </Row>
    // <div className={s.badge}>
    //   <img className={s.badge} src={props.userImg}></img>
    //   <NavLink className={s.name} to={'/settings'}>
    //     {userName}
    //   </NavLink>
    // </div>
  );
};

export default Badge;
