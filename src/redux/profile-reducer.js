const ADD_POST = "ADD-POST";
const ADD_SYMBOL_NEW_POST = "ADD-SYMBOL-NEW-POST";

let initialState = {
  posts: [
    { id: 1, text: 'hi, how are you?', likeCount: 4 },
    { id: 2, text: 'my fist post', likeCount: 14 },
    { id: 3, text: 'hello world', likeCount: 111 },
    { id: 4, text: 'houdi-hoooo', likeCount: 4 },
    { id: 5, text: 'my fist post', likeCount: 14 },
    { id: 6, text: 'hello world', likeCount: 111 },
    { id: 7, text: 'houdi-hoooo', likeCount: 4 },
    // { id: 1, text: 'houdi-hoooo', likeCount: 4 },
  ],
  newPostText: 'add new post here',
  myID: "999",
}

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
        newPostText: 'add new post here',
      }
    case ADD_SYMBOL_NEW_POST:
      return {
        ...state,
        newPostText: action.newText,
      }
    default:
      return state;
  }
}

export const AddPostActionCreator = () => {
  return ({
    type: ADD_POST,
  })
}
export const AddSymbolNewPostActionCreator = (text) => {
  debugger
  return ({
    type: ADD_SYMBOL_NEW_POST,
    newText: text,
  })
}

export default profileReducer;
