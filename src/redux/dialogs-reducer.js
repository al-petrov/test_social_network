import { messagesAPI, usersAPI } from '../api/api';

const SEND_MESSAGE = 'SEND-MESSAGE';
const ADD_SIMBOL_NEW_MESSAGE = 'ADD-SIMBOL-NEW-MESSAGE';
const SET_MESSAGE_DATA = 'SET-MESSAGE-DATA';
const SET_DIALOGS_DATA = 'SET-DIALOGS-DATA';

let initialState = {
  dialogsData: [
    // { id: 1, name: 'Alena' },
    // { id: 2, name: 'Mom' },
    // { id: 3, name: 'Vasya' },
    // { id: 4, name: 'Timur' },
    // { id: 5, name: 'Dima' },
    // { id: 6, name: 'Denis' },
  ],
  messagesData: [
    // { id: 1, senderId: '1', getterId: '999', message: 'hi', date: new Date(2021, 1, 1, 12, 24, 4) },
    // { id: 2, senderId: '1', getterId: '999', message: 'how are you', date: new Date(2021, 1, 1, 12, 25, 0) },
    // { id: 3, senderId: '5', getterId: '999', message: 'YO', date: new Date(2021, 1, 1, 12, 24, 4) },
    // { id: 4, senderId: '3', getterId: '999', message: 'fuck', date: new Date(2021, 1, 1, 12, 24, 4) },
    // { id: 5, senderId: '3', getterId: '999', message: 'you', date: new Date(2021, 1, 1, 12, 24, 4) },
    // { id: 6, senderId: '3', getterId: '999', message: 'YO', date: new Date(2021, 1, 1, 12, 24, 4) },
    // { id: 7, senderId: '999', getterId: '1', message: 'hi', date: new Date(2021, 1, 1, 12, 24, 20) },
    // { id: 8, senderId: '999', getterId: '1', message: "i'm fine", date: new Date(2021, 1, 1, 12, 25, 43) },
  ],
  newMessages: [],
  getterId: null,
  myID: null,
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    case SET_MESSAGE_DATA:
      return {
        ...state,
        getterId: action.getterId,
        messagesData: action.data,
      };
    case SET_DIALOGS_DATA:
      return {
        ...state,
        dialogsData: action.data,
      };
    case SEND_MESSAGE:
      let myIndex = state.newMessages.findIndex(item => item.getterId === action.getterId);
      stateCopy.newMessages.splice(myIndex, 1);
      return {
        ...state,
        newMessages: state.newMessages.splice(myIndex, 1),
      };
    case ADD_SIMBOL_NEW_MESSAGE:
      stateCopy.newMessages = [...state.newMessages];
      for (let item of stateCopy.newMessages) {
        if (item.getterId === action.getter) {
          item.message = action.newText;
          return stateCopy;
        }
      }
      let newMessage = {
        id: state.messagesData.length + 1,
        senderId: state.myID,
        getterId: action.getter,
        message: action.newText,
        date: Date.now(),
      };
      stateCopy.newMessages.push(newMessage);
      return stateCopy;
    default:
      return state;
  }
};

export const sendMessageAC = getterId => {
  return {
    type: SEND_MESSAGE,
    getterId: getterId,
  };
};

export const setDialogsDataAC = data => {
  return {
    type: SET_DIALOGS_DATA,
    data: data,
  };
};

export const AddSymbolNewMesssageActionCreator = (text, getter) => {
  return {
    type: ADD_SIMBOL_NEW_MESSAGE,
    getter: getter,
    newText: text,
  };
};

export const setMessageDataAC = (getterId, data) => {
  return {
    type: SET_MESSAGE_DATA,
    getterId: getterId,
    data: data,
  };
};

export const setDialogsData = myId => {
  return dispatch => {
    usersAPI.getUsers(20, 1).then(data => {
      debugger;
      dispatch(setDialogsDataAC(data.users));
    });
  };
};

export const setMessageData = (myId, getterId) => {
  return dispatch => {
    if (getterId) {
      messagesAPI.getMessages(myId, getterId, 100, 1).then(data => {
        debugger;
        dispatch(setMessageDataAC(getterId, data));
      });
    } else {
      dispatch(setMessageDataAC(null, []));
    }
  };
};

export const SendMessage = (myId, getterId, messagetext, senddate) => {
  return dispatch => {
    messagesAPI.addMessage(myId, getterId, messagetext, senddate).then(isOk => {
      debugger;
      if (isOk) {
        dispatch(sendMessageAC(getterId));
        dispatch(setMessageData(myId, getterId));
      }
    });
  };
};

export default dialogsReducer;
