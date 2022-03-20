import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../../redux/profile-reducer';
import * as axios from 'axios';
import { withRouter } from 'react-router';
import ProfileInfo from './PofileInfo';

class ProfileInfoContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.myID;

    if (userId) {
      axios.get(`http://barabulka.site:8080/api/user/` + userId).then(response => {
        this.props.setUserProfile(response.data, userId);
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
