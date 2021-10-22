import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {

  let allPosts = props.data.map(p => <Post message={p.text} likeCount={p.likeCount} />)

  return (
    <div className={p.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea></textarea>
          <div>
            <button>Add post</button>
            <button>Remove</button>
          </div>
        </div>

        <div className={p.content}>
          {allPosts}
        </div>
      </div>
    </div>
  )
}

export default MyPost