import React from 'react';
import p from './Post.module.css';
import heart from './postImages/heart.png';
import NoFoto from '../../../Common/Foto/NoFoto.png';

const Post = props => {
  let likes = '';
  if (props.likeCount) {
    likes = '' + props.likeCount + ' like';
  }
  return (
    <div className={p.item}>
      <img src={props.userImg || NoFoto}></img>
      {/* {props.userImg || NoFoto}</img> */}
      {props.message}
      <div className={p.likes}>
        <img src={heart}></img>
        {likes}
      </div>
    </div>
  );
};

export default Post;
