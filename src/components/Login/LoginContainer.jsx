import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { setUserProfile } from '../../redux/profile-reducer';
import { setAuthUserData, login } from '../../redux/auth-reducer';
import { withRouter } from 'react-router';
import { message } from 'antd';

class LoginContainer extends React.Component {
  componentDidMount() {}

  componentDidUpdate() {
    if (this.props.isAuth) {
      message.success('Success!');
      this.props.history.push(this.props.redirectAddress || '/profile');
    } else {
      message.error('error!');
    }
  }

  render() {
    return <Login login={this.props.login} />;
  }
}

let mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  myID: state.auth.myID,
  userName: state.auth.userName,
  userStatus: state.auth.userStatus,
  userImg: state.auth.userImg,
  login: state.auth.login,
  redirectAddress: state.auth.redirectAddress,
});

let withUrlDataContainer = withRouter(LoginContainer);

export default connect(mapStateToProps, { setUserProfile, setAuthUserData, login })(withUrlDataContainer);
