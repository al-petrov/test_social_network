import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators';
import { Textarea } from '../../Common/FormsControls/FormsControl';
import p from './MyPosts.module.css';
import Post from './Post/Post';

let maxLengthNewPostText = maxLengthCreator(255);

let AddNewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          placeholder="add post here"
          validate={[required, maxLengthNewPostText]}
        />
        <button disabled={props.addPostIsFetching}>Add post</button>
      </div>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

const MyPosts = props => {
  let allPosts = props.posts.map(p => (
    <Post message={p.text || ''} likeCount={p.likecount} userImg={p.userimg || undefined} />
  ));

  let inputArea = props.profile ? props.profile.userId == props.myID : false;

  let addPost = values => {
    props.addPost(props.myID, values.newPostText);
  };

  return (
    <div className={p.postsBlock}>
      <h3>My posts</h3>
      {inputArea ? <AddNewPostFormRedux onSubmit={addPost} /> : <div>не доступно</div>}
      <div className={p.content}>{allPosts}</div>
    </div>
  );
};

export default MyPosts;
