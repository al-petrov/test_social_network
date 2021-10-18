import React from "react";
import p from './Post.module.css';

const Post = (props) => {
  return (
    <div className={p.item}>
      <img src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'></img>
      {props.message}
      <div>
        <img src="https://image.flaticon.com/icons/png/512/1239/1239282.png"></img>
        {props.likeCount + " "}
        {/* <img src="images/heart.png"></img> */}
        <span>like</span>
      </div>
    </div>
  )
}

export default Post