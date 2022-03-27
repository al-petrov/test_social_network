import React from 'react';
import { connect } from 'react-redux';
import Profile from './Pofile';
import {
  addPost,
  setUserProfile,
  addSymbolNewPost,
  setUserPosts,
  addPostInProgress,
} from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import { AddSymbolNewMesssageActionCreator, SendMessageActionCreator } from '../../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Messages from './Messages';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

const mapStateToProps = state => {
  return { isAuth: state.auth.isAuth, myID: state.auth.myID, state: state.messages };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: (text, getter) => {
      dispatch(SendMessageActionCreator(text, getter));
    },
    messageChanged: (text, getter) => {
      dispatch(AddSymbolNewMesssageActionCreator(text, getter));
    },
  };
};

let AuthRedirectComponent = withAuthRedirect(Messages);

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default MessagesContainer;
