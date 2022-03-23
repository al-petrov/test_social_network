import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import Header from './Header';
import { withRouter } from 'react-router-dom';

class HeaderAPIComponent extends React.Component {
  componentDidMount() {
    this.props.setAuthUserData();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  myID: state.auth.myID,
  userName: state.auth.userName,
  userStatus: state.auth.userStatus,
  userImg: state.auth.userImg,
  login: state.auth.login,
});

let withUrlHeaderAPIComponent = withRouter(HeaderAPIComponent);

export default connect(mapStateToProps, { setAuthUserData })(withUrlHeaderAPIComponent);
