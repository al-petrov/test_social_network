import React from 'react';
import { connect } from 'react-redux';
import { change } from 'redux-form';
import Settings from './Settings';
import { updateUserData, newProfileImage, uploadImage } from '../../redux/auth-reducer';
import { addFile } from '../../redux/file-reducer';
// import { newProfileImage } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { withRouter } from 'react-router';
import { compose } from 'redux';

class SettingsContainer extends React.Component {
  componentDidMount() {
    if (this.props.myID) {
    }
  }

  render() {
    return (
      <Settings
        {...this.props}
        updateUserData={this.props.updateUserData}
        uploadImage={this.props.uploadImage}
        addFile={this.props.addFile}
      />
    );
  }
}

let mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  myID: state.auth.myID,
  userName: state.auth.userName,
  userStatus: state.auth.userStatus,
  userImg: state.auth.userImg,
  login: state.auth.login,
});

// export default connect(mapStateToProps, { updateUserData })(SettingsContainer);

export default compose(
  connect(mapStateToProps, { updateUserData, newProfileImage, change, addFile }),
  withRouter,
  withAuthRedirect,
)(SettingsContainer);
