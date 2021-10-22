import React from "react";
// import p from './Profile.module.css';
import MyPost from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/PofileInfo";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPost />
    </div>)
}

export default Profile;