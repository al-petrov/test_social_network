import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    userStatusText: this.props.profile.userstatus,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.setStatus(this.props.myID, this.state.userStatusText);
  };

  onStatusChange = e => {
    this.setState({ userStatusText: e.currentTarget.value });
  };

  render() {
    if (!this.props.profile) {
      return <Preloader />;
    }
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.state.userStatusText}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onChange={this.onStatusChange}
              onBlur={this.deactivateEditMode}
              value={this.state.userStatusText}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
