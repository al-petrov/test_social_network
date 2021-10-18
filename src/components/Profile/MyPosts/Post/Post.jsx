import React from "react";
import p from './Post.module.css';

const Post = () => {
  return (
    <div className={p.item}>
      <img src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'></img>
      {`что то`}
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post