import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import dialogsReduser from './dialogs-reducer';
import profileReduser from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './app-reducer';
import fileReducer from './file-reducer';

let reducers = combineReducers({
  auth: authReducer,
  profilePage: profileReduser,
  messages: dialogsReduser,
  sidebar: sidebarReducer,
  users: usersReducer,
  form: formReducer,
  app: appReducer,
  file: fileReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
