import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, addSimbolNewPost } from './redux/state';


export let rerenderMyApp = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App data={state} addPost={addPost} addSimbolNewPost={addSimbolNewPost}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  