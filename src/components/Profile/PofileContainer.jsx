import React from 'react';
import { connect } from 'react-redux';
import Profile from './Pofile';
import { addPost, setUserProfile, setUserPosts, addPostInProgress, setStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.myID;

    if (userId) {
      this.props.setUserProfile(userId);
    }
    if (userId) {
      this.props.setUserPosts(userId);
    }
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = state => ({
  posts: state.profilePage.posts,
  profile: state.profilePage.profile,
  addPostIsFetching: state.profilePage.addPostInProgress,

  myID: state.auth.myID,
  userName: state.auth.userName,
  userStatus: state.auth.userStatus,
  userImg: state.auth.userImg,
  login: state.auth.login,
});

export default compose(
  connect(mapStateToProps, { setUserProfile, addPost, setUserPosts, addPostInProgress, setStatus }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
