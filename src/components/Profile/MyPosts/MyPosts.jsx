import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPost = (props) => {

  return (
    <div>

      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
          <button>Remove</button>
        </div>

        <div className={p.content}>
          <Post message='Привет как дела?' likeCount='12'/>
          <Post message='my first post' likeCount='111'/>
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}

export default MyPost