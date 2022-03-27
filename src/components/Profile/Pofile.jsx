import React from 'react';
import p from './Profile.module.css';
import ProfileInfo from './ProfileInfo/PofileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = props => {
  return (
    <div className={p.thisContentWrapper}>
      <div className={p.profileWrapper}>
        <ProfileInfo {...props} />
      </div>
      <div className={p.postsWrapper}>
        <MyPosts {...props} />
      </div>
    </div>
  );
};

export default Profile;
