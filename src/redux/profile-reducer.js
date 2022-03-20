const ADD_POST = 'ADD-POST';
const ADD_SYMBOL_NEW_POST = 'ADD-SYMBOL-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_POSTS = 'SET-USER-POSTS';

let initialState = {
  posts: [],
  newPostText: '',
  profile: null,
  myID: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        text: state.newPostText,
        likeCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
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

export default profileReducer;
