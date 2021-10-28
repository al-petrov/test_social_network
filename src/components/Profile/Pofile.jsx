import React from "react";
import p from './Profile.module.css';
import MyPost from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/PofileInfo";

const Profile = (props) => {

  let myPosts = props.posts;

  return (
    <div className={p.thisContentWrapper}>
      <div className={p.profileWrapper}>
        <ProfileInfo />
      </div>
      <div className={p.postsWrapper}>
        <MyPost myPosts={myPosts} addPost={props.addPost} addSimbolNewPost={props.addSimbolNewPost} />
      </div>
    </div>)
}

export default Profile;