import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
  { id: 1, text: 'my fist post', likeCount: 14 },
  { id: 1, text: 'hello world', likeCount: 111 },
  { id: 1, text: 'houdi-hoooo', likeCount: 4 },
]


let allData = {
  messages: allMessages,
  posts: posts,
}

ReactDOM.render(
  <React.StrictMode>
    <App data={allData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
