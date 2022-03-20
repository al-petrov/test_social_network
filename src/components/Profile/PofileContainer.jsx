import React from 'react';
import { connect } from 'react-redux';
import Profile from './Pofile';
import { addPost, setUserProfile } from '../../redux/profile-reducer';
import * as axios from 'axios';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
  componentDidMount() {
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
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = state => ({
  posts: state.profilePage.posts,
  profile: state.profilePage.profile,
  myID: state.auth.myID,
  a: 13,
});

let withUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, addPost })(withUrlDataContainer);
