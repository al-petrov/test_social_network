// import { stopSubmit } from 'redux-form';
import { authAPI, usersAPI } from '../api/api';
import { setUserProfile, setUserPosts } from './profile-reducer';

const SET_USER_DATA = 'SET-USER-DATA';
const UNSET_USER_DATA = 'UNSET-USER-DATA';
const SET_REDIRECT_ADDRESS = 'SET-REDIRECT-ADDRESS';
const ADD_ERROR = 'ADD-ERROR';
const DELETE_ERROR = 'DELETE-ERROR';

const initialState = {
  isAuth: false,
  myID: null,
  userName: null,
  userStatus: null,
  userImg: null,
  login: null,
  isFetching: false,
  errors: [],
  redirectAddress: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REDIRECT_ADDRESS:
      return {
        ...state,
        redirectAddress: action.redirectAddress,
      };
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case UNSET_USER_DATA:
      return { initialState };
    case ADD_ERROR:
      return {
        ...state,
        errors: [...state.errors, action.error],
      };
    case DELETE_ERROR:
      return {
        ...state,
        errors: [],
        // state.errors.indexOf(action.error) != -1
        //   ? state.errors.splice(state.errors.indexOf(action.error))
        //   : state.errors,
      };
    default:
      return state;
  }
};

export const setRedirectAddressAC = redirectAddress => ({
  type: SET_REDIRECT_ADDRESS,
  redirectAddress,
});

export const addErrorAC = error => ({
  type: ADD_ERROR,
  error,
});

export const deleteErrorAC = () => ({
  type: DELETE_ERROR,
});

export const deleteErrors = () => dispatch => {
  return dispatch(deleteErrorAC());
};

export const setAuthUserDataAC = (myID, login, userName, userImg, userStatus) => ({
  type: SET_USER_DATA,
  data: { myID, login, userName, userStatus, userImg },
});

export const unsetAuthUserDataAC = () => ({
  type: UNSET_USER_DATA,
});

export const getWebdavConfig = () => dispatch => {
  return authAPI.webdavConnect().then(response => {
    console.log(response);
  });
};

export const setAuthUserData = () => dispatch => {
  return authAPI.auth().then(response => {
    if (response && response.isLogined) {
      dispatch(setAuthUserDataAC(response.id, response.login, response.username, response.img, response.userstatus));
      dispatch(setUserProfile(response.id));
      dispatch(setUserPosts(response.id));
    }
  });
};

export const login = (login, password, rememberMe) => {
  return dispatch => {
    authAPI.login(login, password, rememberMe).then(data => {
      if (data.isLogined) {
        dispatch(setAuthUserDataAC(data.id, data.login, data.username, data.img, data.userstatus));
      } else {
        dispatch(addErrorAC('wrong login or password'));
        // let action = stopSubmit('login', { _error: 'wrong login or password' });
        // dispatch(action);
      }
    });
  };
};

export const updateUserData = (myID, country, username, img, userstatus) => {
  return dispatch => {
    usersAPI.updateUserData(myID, username, country, userstatus, img).then(data => {
      if (data) {
        dispatch(setAuthUserDataAC(data.id, data.login, data.username, data.img, data.userstatus));
      }
    });
  };
};

export const uploadImage = file => {
  return usersAPI.uploadImage(file);
};

export default authReducer;
