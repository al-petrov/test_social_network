import React from "react";
import { AddPostActionCreator, AddSymbolNewPostActionCreator } from "../../../redux/profile-reducer";
import p from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {

  let allPosts = props.myPosts.posts.map(p => <Post message={p.text} likeCount={p.likeCount} />)

  let addPost = () => {
    let text = newPostElement.current.value;
    props.dispatch(AddPostActionCreator(text));
  }

  let onPostChange = () => {
    let myText = newPostElement.current.value;
    props.dispatch(AddSymbolNewPostActionCreator(myText));
  }

  let newPostElement = React.createRef();

  return (
    <div className={p.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.myPosts.newPostText}/>
          <div>
            <button onClick={ () => addPost()}>Add post</button>
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