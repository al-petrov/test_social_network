import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Badge from './UserBadge/Badge';

class HeaderAPIComponent extends React.Component {
  render() {
    return <Badge {...this.props} />;
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

export default connect(mapStateToProps)(withUrlHeaderAPIComponent);
