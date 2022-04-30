import React, { useState } from 'react';

const ProfileStatusWithHook = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.profile.userstatus);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.setStatus(props.myID, status);
  };

  const onStatusChange = e => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{status}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={status} />
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHook;
