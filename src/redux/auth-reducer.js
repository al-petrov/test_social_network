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

export const setAuthUserData = (myID, login, userName, userImg, userStatus) => ({
  type: SET_USER_DATA,
  data: { myID, login, userName, userStatus, userImg },
});

// export const setAuthUserData = (userId, login) => ({ type: SET_USER_DATA, data: { userId, login }})

export default authReducer;
