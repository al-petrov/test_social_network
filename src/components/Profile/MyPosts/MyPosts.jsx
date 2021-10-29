import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";

const ActionAddPostCreator = (text) => {
  return({
    type: "ADD-POST",
  })
}

const ActionAddSymbolNewPostCreator = (text) => {
  return({
    type: "ADD-SIMBOL-NEW-POST",
    newText: text,
  })
}


const MyPost = (props) => {

  let allPosts = props.myPosts.posts.map(p => <Post message={p.text} likeCount={p.likeCount} />)

  let addPost = () => {
    let text = newPostElement.current.value;
    props.dispatch(ActionAddPostCreator());
  }

  let onPostChange = () => {
    let myText = newPostElement.current.value;
    props.dispatch(ActionAddSymbolNewPostCreator(myText));
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