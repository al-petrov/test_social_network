import React from "react";
// import p from './Profile.module.css';
import MyPost from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/PofileInfo";

const Profile = (props) => {

  let myPosts = props.data;
  debugger;

  return (
    <div>
      <ProfileInfo />
      <MyPost data={myPosts} />
    </div>)
}

export default Profile;