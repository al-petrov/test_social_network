import React from 'react';
import p from './Profile.module.css';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = props => {
  return (
    <div className={p.thisContentWrapper}>
      <div className={p.profileWrapper}>
        <ProfileInfoContainer {...props} />
      </div>
      <div className={p.postsWrapper}>
        <MyPostsContainer {...props} />
      </div>
    </div>
  );
};

export default Profile;
