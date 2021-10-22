import React from "react";
import p from './Post.module.css';
import heart from "./postImages/heart.png"

const Post = (props) => {
  let likes = '';
  if (props.likeCount) {
    likes = props.likeCount + " like";
  }

  return (
    <div className={p.item}>
      <img src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'></img>
      {props.message}
      <div className={p.likes}>
        <img src={heart}></img> 
        {likes}
      </div>
    </div>
  )
}

export default Post