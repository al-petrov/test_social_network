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
    debugger;
    if (userId) {
      this.props.setUserPosts(userId, this.props.newPostText);
      return;
    }
    if (this.props.myID) {
      this.props.setUserPosts(this.props.myID, this.props.newPostText);
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
