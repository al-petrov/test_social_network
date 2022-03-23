import React from 'react';
import { connect } from 'react-redux';
import Profile from './Pofile';
import { addPost, setUserProfile } from '../../redux/profile-reducer';
import * as axios from 'axios';
import { Redirect, withRouter } from 'react-router';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/PofileInfo';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.myID;
    debugger;
    userId ? this.props.setUserProfile(userId) : false;
    userId ? this.props.setUserPosts(userId) : false;

    // let userId = this.props.match.params.userId;
    // if (!userId) userId = this.props.myID;
    //
    // if (userId) {
    //   axios.get(`http://barabulka.site:8080/api/user/` + userId)
    //     .then(response => {
    //
    //       this.props.setUserProfile(response.data, userId);
    //     })
    //}
  }

  render() {
    return (
      <div>
        <ProfileInfo {...this.props} />
        <MyPosts {...this.props} />
      </div>
    );
    // <Profile {...this.props} />;
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

let withUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, addPost })(withUrlDataContainer);
