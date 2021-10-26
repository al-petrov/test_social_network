import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state';

let rerenderMyApp = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App data={state} addPost={store.addPost.bind(store)} addSimbolNewPost={store.addSimbolNewPost.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

store.subscribe(rerenderMyApp);

rerenderMyApp(store.getState());



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
