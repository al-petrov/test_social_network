import {
  AddSymbolNewMesssageActionCreator,
  SendMessage,
  setMessageData,
  setDialogsData,
} from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MyMessages from './MyMessages';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import React from 'react';
import { compose } from 'redux';

class MyMessagesContainer extends React.Component {
  componentDidMount() {
    this.props.setDialogsData(this.props.myID);
    let getterId = this.props.match.params.userId;
    this.props.setMessageData(getterId);
  }

  render() {
    return <MyMessages {...this.props} />;
  }
}

const mapStateToProps = state => {
  return { myID: state.auth.myID, state: state.messages };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: (myID, getterId, messagetext) => {
      dispatch(SendMessage(myID, getterId, messagetext, new Date()));
    },
    messageChanged: (text, getter) => {
      dispatch(AddSymbolNewMesssageActionCreator(text, getter));
    },
    setMessageData: (myId, getterId) => {
      dispatch(setMessageData(myId, getterId));
    },
    setDialogsData: myId => {
      dispatch(setDialogsData(myId));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(MyMessagesContainer);
