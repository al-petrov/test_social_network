import React from 'react';
import { AddPostActionCreator, AddSymbolNewPostActionCreator } from '../../../redux/profile-reducer';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
  let allPosts = props.posts.map(p => <Post message={p.text} likeCount={p.likeCount} />);

  let inputArea = props.profile ? props.profile.userId == props.myID : false;

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    props.addSymbolNewPost(newPostElement.current.value);
  };

  let newPostElement = React.createRef();

  return (
    <div className={p.postsBlock}>
      <div>
        <h3>My posts</h3>
        {inputArea ? (
          <div>
            <textarea
              placeholder="add post here"
              onChange={onPostChange}
              ref={newPostElement}
              value={props.newPostText}
            />
            <div>
              <button onClick={() => props.addPost()}>Add post</button>
              <button>Remove</button>
            </div>
          </div>
        ) : (
          <div>не доступно</div>
        )}

        <div className={p.content}>{allPosts}</div>
      </div>
    </div>
  );
};

export default MyPosts;
