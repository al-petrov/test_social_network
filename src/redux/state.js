import dialogsReduser from './dialogs-reducer';
import profileReduser from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    messages: {
      dialogsData: [
        { id: 1, name: 'Alena' },
        { id: 2, name: 'Mom' },
        { id: 3, name: 'Vasya' },
        { id: 4, name: 'Timur' },
        { id: 5, name: 'Dima' },
        { id: 6, name: 'Denis' },
      ],
      messagesData: [
        { id: 1, senderId: '1', getterId: '999', message: 'hi', date: new Date(2021, 1, 1, 12, 24, 4) },
        {
          id: 2,
          senderId: '1',
          getterId: '999',
          message: 'how are you xfgdfg ds gsdfgdf sdfdfs dsfds fdsf sg sstegdfg sdfs ddgfd ',
          date: new Date(2021, 1, 1, 12, 25, 0),
        },

        { id: 7, senderId: '999', getterId: '1', message: 'hi', date: new Date(2021, 1, 1, 12, 24, 20) },
        { id: 8, senderId: '999', getterId: '1', message: "i'm fine", date: new Date(2021, 1, 1, 12, 25, 43) },

        { id: 3, senderId: '5', getterId: '999', message: 'YO', date: new Date(2021, 1, 1, 12, 24, 4) },
        { id: 4, senderId: '3', getterId: '999', message: 'fuck', date: new Date(2021, 1, 1, 12, 24, 4) },
        { id: 5, senderId: '3', getterId: '999', message: 'you', date: new Date(2021, 1, 1, 12, 24, 4) },
        { id: 6, senderId: '3', getterId: '999', message: 'YO', date: new Date(2021, 1, 1, 12, 24, 4) },
      ],
      newMessages: [],
      myID: '999',
    },
    profilePage: {
      posts: [
        { id: 1, text: 'hi, how are you?', likeCount: 4 },
        { id: 2, text: 'my fist post', likeCount: 14 },
        { id: 3, text: 'hello world', likeCount: 111 },
        { id: 4, text: 'houdi-hoooo', likeCount: 4 },
        { id: 5, text: 'my fist post', likeCount: 14 },
        { id: 6, text: 'hello world', likeCount: 111 },
        { id: 7, text: 'houdi-hoooo', likeCount: 4 },
        // { id: 1, text: 'houdi-hoooo', likeCount: 4 },
      ],
      newPostText: 'add new post here',
      myID: '999',
    },
    sidebar: {},
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.messages = dialogsReduser(this._state.messages, action);
    this._state.sideBar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },

  addPost() {
    let newPost = {
      id: 8,
      text: this._state.profilePage.newPostText,
      likeCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = 'add new post here';
    this._callSubscriber(this._state);
  },
  addSimbolNewPost(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addSimbolNewMessage(newText, getter) {
    for (let item of this._state.messages.newMessages) {
      if (item.getterId == getter) {
        item.message = newText;
        this._callSubscriber(this._state);
        return;
      }
    }
    let newMessage = {
      id: this._state.messages.messagesData.length + 1,
      senderId: this._state.myID,
      getterId: getter,
      message: newText,
      date: Date.now(),
    };
    this._state.messages.newMessages.push(newMessage);
    this._callSubscriber(this._state);
  },
  sendMessage(textMessage, getter) {
    let newMes = {
      id: this._state.messages.messagesData.length + 1,
      senderId: this._state.myID,
      getterId: getter,
      message: textMessage,
      date: Date.now(),
    };
    this._state.messages.messagesData.push(newMes);
    let myIndex = this._state.messages.newMessages.findIndex(item => item.getterId == getter);
    this._state.messages.newMessages.splice(myIndex, 1);

    this._callSubscriber(this._state);
  },
};

export default store;
window.state = store;
