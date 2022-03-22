import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../../redux/profile-reducer';
import { withRouter } from 'react-router';
import ProfileInfo from './PofileInfo';

class ProfileInfoContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    debugger;
    if (userId || this.props.myID) {
      this.props.setUserProfile(userId || this.props.myID);
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
});

let withUrlProfileInfoContainer = withRouter(ProfileInfoContainer);

export default connect(mapStateToProps, { setUserProfile })(withUrlProfileInfoContainer);
