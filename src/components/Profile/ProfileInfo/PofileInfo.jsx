import React from "react";
import s from './ProfileInfo.module.css';
// import MyPost from './MyPosts/MyPosts';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.profileHeader}>
        <img src='https://premiya.vidatiknigu.com.ua/wp-content/uploads/2021/02/odinochestvo_chelovek_zakat_132970_300x168.jpg'></img>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>)
}

export default ProfileInfo;