import React from "react";
import p from './Profile.module.css';
import MyPost from './MyPosts/MyPosts';

const Profile = () => {
    return (
    <div>
    <div className={p.content}>
      <img src='https://premiya.vidatiknigu.com.ua/wp-content/uploads/2021/02/odinochestvo_chelovek_zakat_132970_300x168.jpg'></img>  
    </div>
    <div className={p.content}>
      ava + description
    </div>
    <MyPost />
  </div>)
}

export default Profile;