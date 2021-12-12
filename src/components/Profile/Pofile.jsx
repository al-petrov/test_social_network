import React from "react";
import p from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/PofileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  debugger
  return (
    <div className={p.thisContentWrapper}>
      <div className={p.profileWrapper}>
        <ProfileInfo profile={props.profile} />
      </div>
      <div className={p.postsWrapper}>
        <MyPostsContainer myID={props.myID} />
      </div>
    </div>)
}

export default Profile;