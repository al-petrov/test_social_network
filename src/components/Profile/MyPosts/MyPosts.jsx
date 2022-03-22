import React from 'react';
import { AddPostActionCreator, AddSymbolNewPostActionCreator } from '../../../redux/profile-reducer';
import p from './MyPosts.module.css';
import Post from './Post/Post';
import axios from 'axios';
import { usersAPI } from '../../../api/api';

const MyPosts = props => {
  debugger;
  let allPosts = props.posts.map(p => <Post message={p.text} likeCount={p.likeCount} />);

  let inputArea = props.profile ? props.profile.userId == props.myID : false;

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
              <button
                disabled={props.addPostIsFetching}
                onClick={() => {
                  props.addPost(props.myID);
                  // props.addPostInProgress(true);
                  // if (props.myID) {
                  //   usersAPI.addPost(props.myID, props.newPostText, 0).then(isOk => {
                  //     props.addPost();
                  //     props.addPostInProgress(false);
                  //   });
                  // }
                }}
              >
                Add post
              </button>
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
