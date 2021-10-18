import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPost = () => {
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
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}

export default MyPost