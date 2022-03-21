import { connect } from 'react-redux';
import { addPost, addSymbolNewPost, setUserPosts, addPostInProgress } from '../../../redux/profile-reducer';
import React from 'react';
import axios from 'axios';
import MyPosts from './MyPosts';
import { withRouter } from 'react-router';
import { usersAPI } from '../../../api/api';

class MyPostsContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.myID;

    if (userId) {
      usersAPI.getPosts(userId).then(data => {
        this.props.setUserPosts(data.posts);
      });
    }
  }

  render() {
    return <MyPosts {...this.props} />;
  }
}

let mapStateToProps = state => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
  profile: state.profilePage.profile,
  addPostIsFetching: state.profilePage.addPostInProgress,

  isAuth: state.auth.isAuth,
  myID: state.auth.myID,
  userName: state.auth.userName,
  userStatus: state.auth.userStatus,
  userImg: state.auth.userImg,
  login: state.auth.login,
});

let withURLDataContainer = withRouter(MyPostsContainer);

export default connect(mapStateToProps, { addPost, addSymbolNewPost, setUserPosts, addPostInProgress })(
  withURLDataContainer,
);
