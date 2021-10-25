import { rerenderMyApp } from "../render";

let dialogsData = [
    {id: 1, name: 'Alena'},
    {id: 2, name: 'Mom'},
    {id: 3, name: 'Vasya'},
    {id: 4, name: 'Timur'},
    {id: 5, name: 'Dima'},
    {id: 6, name: 'Denis'},
  ]
  
  let messagesData = [
    {id: 1, senderId: "1", getterId: "999", message: 'hi', date: new Date(2021, 1, 1, 12, 24, 4)},
    {id: 2, senderId: "1", getterId: "999", message: 'how are you', date: new Date(2021, 1, 1, 12, 25, 0)},
    
    {id: 1, senderId: "999", getterId: "1", message: 'hi', date: new Date(2021, 1, 1, 12, 24, 20)},
    {id: 2, senderId: "999", getterId: "1", message: 'i\'m fine', date: new Date(2021, 1, 1, 12, 25, 43)},

    {id: 3, senderId: "5", getterId: "999", message: 'YO', date: new Date(2021, 1, 1, 12, 24, 4)},
    {id: 4, senderId: "3", getterId: "999",message: 'fuck', date: new Date(2021, 1, 1, 12, 24, 4)},
    {id: 5, senderId: "3", getterId: "999",message: 'you', date: new Date(2021, 1, 1, 12, 24, 4)},
    {id: 6, senderId: "3", getterId: "999",message: 'YO', date: new Date(2021, 1, 1, 12, 24, 4)},
  ]
  
  let allMessages = {
    dialogsData: dialogsData,
    messagesData: messagesData,
  }
  
  let posts = [
    { id: 1, text: 'hi, how are you?', likeCount: 4 },
    { id: 2, text: 'my fist post', likeCount: 14 },
    { id: 3, text: 'hello world', likeCount: 111 },
    { id: 4, text: 'houdi-hoooo', likeCount: 4 },
    { id: 5, text: 'my fist post', likeCount: 14 },
    { id: 6, text: 'hello world', likeCount: 111 },
    { id: 7, text: 'houdi-hoooo', likeCount: 4 },
    // { id: 1, text: 'houdi-hoooo', likeCount: 4 },
  ]
  
  let profilePage = {
    posts: posts,
    newPostText: 'add new post here',
  }
  
  let state = {
    messages: allMessages,
    profilePage : profilePage,
    myID: "999",
  };

  window.state = state;

  export let addPost = (postMessage) => {
    let newPost = {
      id: 8,
      text: postMessage,
      likeCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = 'add new post here';
    rerenderMyApp(state);
  }

  export let addSimbolNewPost = (text) => {
    state.profilePage.newPostText = text;
    rerenderMyApp(state);
  }

  export default state;