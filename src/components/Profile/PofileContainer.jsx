import React from 'react';
import { connect } from 'react-redux';
import Profile from './Pofile';
import {
  addPost,
  setUserProfile,
  addSymbolNewPost,
  setUserPosts,
  addPostInProgress,
  setStatus,
} from '../../redux/profile-reducer';
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
    // if (!this.props.isAuth) return <Redirect to="login" />;
    return <Profile {...this.props} />;
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = state => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
  profile: state.profilePage.profile,
  addPostIsFetching: state.profilePage.addPostInProgress,

  myID: state.auth.myID,
  userName: state.auth.userName,
  userStatus: state.auth.userStatus,
  userImg: state.auth.userImg,
  login: state.auth.login,
});

compose(
  connect(mapStateToProps, { setUserProfile, addPost, addSymbolNewPost, setUserPosts, addPostInProgress }),
  withAuthRedirect,
  withRouter,
)(ProfileContainer);

let withUrlDataContainer = AuthRedirectComponent;

export default compose(
  connect(mapStateToProps, { setUserProfile, addPost, addSymbolNewPost, setUserPosts, addPostInProgress, setStatus }),
  withAuthRedirect,
  withRouter,
)(ProfileContainer);
