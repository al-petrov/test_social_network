import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { setUserProfile } from '../../redux/profile-reducer';
import { setAuthUserData } from '../../redux/auth-reducer';
import * as axios from 'axios';
import { withRouter } from 'react-router';

class LoginContainer extends React.Component {
  componentDidMount() {
    // let userId = this.props.match.params.userId;
    // if (!userId) userId = this.props.myID;
    // axios.get(`http://barabulka.site:8080/api/user/` + userId)
    //     .then(response => {
    //
    //         this.props.setUserProfile(response.data);
    //     })
  }

  render() {
    return <Login {...this.props} />;
  }
}

let mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  myID: state.auth.myID,
  userName: state.auth.userName,
  userStatus: state.auth.userStatus,
  userImg: state.auth.userImg,
  login: state.auth.login,

  a: 13,
});

let withUrlDataContainer = withRouter(LoginContainer);

export default connect(mapStateToProps, { setUserProfile, setAuthUserData })(withUrlDataContainer);
