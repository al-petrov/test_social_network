import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import NoFoto from '../../Common/Foto/NoFoto.png';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHook from './ProfileStatusWithHook';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.profileHeader}>
        <img src="https://springboard.ai/wp-content/uploads/2017/11/header-use-case-finance.jpg"></img>
      </div>
      <div className={s.avatar}>
        <Avatar
          src={props.profile.img}
          size={{ xs: 100, sm: 120, md: 150, lg: 200, xl: 250, xxl: 300 }}
          icon={<UserOutlined />}
        />
        {/* <img src={props.profile ? props.profile.img || NoFoto : NoFoto}></img> */}

        {/* <div className={s.descriptionBlock}> */}
        <h2>{props.profile.username}</h2>
        <h4>
          <ProfileStatusWithHook {...props} />
        </h4>
      </div>
    </div>
  );
};

export default ProfileInfo;
