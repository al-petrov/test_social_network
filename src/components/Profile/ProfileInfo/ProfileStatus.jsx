import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
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
  };

  render() {
    if (!this.props.profile) {
      return <Preloader />;
    }
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.profile.userstatus}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.profile.userstatus} />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
