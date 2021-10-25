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
    {id: 1, senderId: 1, message: 'hi'},
    {id: 2, senderId: 1, message: 'how are you'},
    {id: 3, senderId: 5, message: 'YO'},
    {id: 4, senderId: 3, message: 'fuck'},
    {id: 5, senderId: 3, message: 'you'},
    {id: 6, senderId: 3, message: 'YO'},
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