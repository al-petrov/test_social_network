import { setAuthUserData, getWebdavConfig } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';
const WEBDAV_SUCCESS = 'WEBDAV-SUCCESS';

const initialState = {
  initialaized: false,
  webdav: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialaized: true,
      };
    case WEBDAV_SUCCESS:
      return {
        ...state,
        webdav: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const webdavSuccess = () => ({
  type: WEBDAV_SUCCESS,
});

export const initializeApp = () => dispatch => {
  let promise = dispatch(setAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export const connectWebdav = () => dispatch => {
  let promise = dispatch(getWebdavConfig());
  Promise.all([promise]).then(() => {
    dispatch(webdavSuccess());
  });
};

export default appReducer;
