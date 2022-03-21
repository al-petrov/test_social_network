import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../../redux/profile-reducer';
import * as axios from 'axios';
import { withRouter } from 'react-router';
import ProfileInfo from './PofileInfo';
import { usersAPI } from '../../../api/api';

class ProfileInfoContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.myID;
    if (userId) {
      usersAPI.getOneUser(userId).then(data => {
        this.props.setUserProfile(data, userId);
      });
    }
  }

  render() {
    return <ProfileInfo {...this.props} />;
  }
}

let mapStateToProps = state => ({
  posts: state.profilePage.posts,
  profile: state.profilePage.profile,
  myID: state.auth.myID,
  isAuth: state.auth.isAuth,
  userName: state.auth.userName,
  userStatus: state.auth.userStatus,
  userImg: state.auth.userImg,
  login: state.auth.login,
  a: 13,
});

let withUrlProfileInfoContainer = withRouter(ProfileInfoContainer);

export default connect(mapStateToProps, { setUserProfile })(withUrlProfileInfoContainer);
