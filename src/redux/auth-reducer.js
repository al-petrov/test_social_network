import { authAPI } from '../api/api';
import { setUserProfile, setUserPosts } from './profile-reducer';

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
  isAuth: false,
  myID: null,
  userName: null,
  userStatus: null,
  userImg: null,
  login: null,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserDataAC = (myID, login, userName, userImg, userStatus) => ({
  type: SET_USER_DATA,
  data: { myID, login, userName, userStatus, userImg },
});

export const setAuthUserData = () => {
  return dispatch => {
    authAPI.auth().then(response => {
      if (response && response.isLogined) {
        dispatch(setAuthUserDataAC(response.id, response.login, response.username, response.img, response.userstatus));
        dispatch(setUserProfile(response.id));
        dispatch(setUserPosts(response.id));
      }
    });
  };
};

export default authReducer;
