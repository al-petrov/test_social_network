import { setAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

const initialState = {
  initialaized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialaized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => dispatch => {
  let promise = dispatch(setAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
