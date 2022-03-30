import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const ADD_SYMBOL_NEW_POST = 'ADD-SYMBOL-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_POSTS = 'SET-USER-POSTS';
const ADD_POST_IN_PROGRESS = 'ADD-POST-IN-PROGRESS';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
  posts: [],
  newPostText: '',
  profile: null,
  myID: null,
  isAuth: false,
  userImg: undefined,
  addPostInProgress: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        text: state.newPostText,
        userimg: state.profile.img,
        likeCount: 0,
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPostText: '',
      };
    case ADD_SYMBOL_NEW_POST:
      return {
        ...state,
        newPostText: action.text,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        profile: { ...state.profile, userstatus: action.userstatus },
      };
    case SET_USER_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case ADD_POST_IN_PROGRESS:
      return {
        ...state,
        addPostInProgress: action.isFetching,
      };
    default:
      return state;
  }
};

export const addPostAC = () => {
  return {
    type: ADD_POST,
  };
};

export const setUserProfileAC = (profile, userId) => ({ type: SET_USER_PROFILE, profile: { ...profile, userId } });

export const setUserPostsAC = posts => ({ type: SET_USER_POSTS, posts });

export const setStatusAC = userstatus => ({ type: SET_USER_STATUS, userstatus });

export const addSymbolNewPost = text => ({ type: ADD_SYMBOL_NEW_POST, text });

export const addPostInProgress = isFetching => ({ type: ADD_POST_IN_PROGRESS, isFetching });

export const setUserProfile = userId => {
  return dispatch => {
    profileAPI.getOneUser(userId).then(data => {
      dispatch(setUserProfileAC(data, userId));
    });
  };
};

export const setUserPosts = userId => {
  return dispatch => {
    profileAPI.getPosts(userId, 1, 5).then(data => {
      dispatch(setUserPostsAC(data.posts));
    });
  };
};

export const addPost = (myID, newPostText) => {
  return dispatch => {
    dispatch(addPostInProgress(true));
    profileAPI.addPost(myID, newPostText, 0).then(isOk => {
      dispatch(addPostAC());
      dispatch(addPostInProgress(false));
    });
  };
};

export const setStatus = (myID, userstatus) => {
  return dispatch => {
    profileAPI.setUserStatus(myID, userstatus).then(isOk => {
      dispatch(setStatusAC(userstatus));
    });
  };
};

export default profileReducer;
