const ADD_POST = 'ADD-POST';
const ADD_SYMBOL_NEW_POST = 'ADD-SYMBOL-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_POSTS = 'SET-USER-POSTS';
const ADD_POST_IN_PROGRESS = 'ADD-POST-IN-PROGRESS';

let initialState = {
  posts: [],
  newPostText: '',
  profile: null,
  myID: null,
  addPostInProgress: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      debugger;
      let newPost = {
        id: state.posts.length + 1,
        text: state.newPostText,
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

export const addPost = () => {
  return {
    type: ADD_POST,
  };
};
export const setUserProfile = (profile, userId) => ({ type: SET_USER_PROFILE, profile: { ...profile, userId } });

export const setUserPosts = posts => ({ type: SET_USER_POSTS, posts });

export const addSymbolNewPost = text => ({ type: ADD_SYMBOL_NEW_POST, text });

export const addPostInProgress = isFetching => ({ type: ADD_POST_IN_PROGRESS, isFetching });

export default profileReducer;
