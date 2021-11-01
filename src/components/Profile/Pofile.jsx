import React from "react";
import p from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/PofileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
  return (
    <div className={p.thisContentWrapper}>
      <div className={p.profileWrapper}>
        <ProfileInfo />
      </div>
      <div className={p.postsWrapper}>
        <MyPostsContainer />
      </div>
    </div>)
}

export default Profile;