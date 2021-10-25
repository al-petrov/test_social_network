import React from "react";
import s from './ProfileInfo.module.css';
// import MyPost from './MyPosts/MyPosts';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.profileHeader}>
        <img src='https://klike.net/uploads/posts/2019-11/1572608828_2.jpg'></img>
      </div>
      <div className={s.avatar}>
        <img src='https://pristor.ru/wp-content/uploads/2019/09/%D0%A4%D0%BE%D1%82%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B2-%D0%BE%D0%B4%D0%BD%D0%BE%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D0%B8%D0%BA%D0%B0%D1%85-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD003.jpg' ></img>;
      </div>
      <div className={s.descriptionBlock}>
        <h2>This Is My Name</h2>
        <h4>This is description of me</h4>
      </div>
    </div>)
}

export default ProfileInfo;