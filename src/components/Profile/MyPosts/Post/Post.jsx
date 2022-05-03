import React, { createElement, useState } from 'react';
import p from './Post.module.css';
import heart from './postImages/heart.png';
import NoFoto from '../../../Common/Foto/NoFoto.png';
import { Avatar, Comment, Tooltip } from 'antd';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

const Post = props => {
  // let likes = '';
  // if (props.likeCount) {
  //   likes = '' + props.likeCount + ' like';
  // }

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  let options = {
    weekday: 'short',
    year: '2-digit',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  };

  return (
    <Comment
      actions={actions}
      author={<a>{props.userName}</a>}
      avatar={<Avatar src={props.userImg} alt={props.userName} />}
      content={<p>{props.message}</p>}
      datetime={new Date(props.date).toLocaleDateString('ru', options)}
      // <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
      //   <span>{moment().fromNow()}</span>
      // </Tooltip>
    />

    // <div className={p.item}>
    //   <img src={props.userImg || NoFoto}></img>
    //   {/* {props.userImg || NoFoto}</img> */}
    //   {props.message}
    //   <div className={p.likes}>
    //     <img src={heart}></img>
    //     {likes}
    //   </div>
    // </div>
  );
};

export default Post;
