const ADD_POST = "ADD-POST";
const ADD_SYMBOL_NEW_POST = "ADD-SYMBOL-NEW-POST";


const profileReduser = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      debugger;
      let newPost = {
        id: state.posts.length + 1,
        text: state.newPostText,
        likeCount: 0,
      };
      state.posts.push(newPost);
      debugger;
      state.newPostText = 'add new post here';
      return state;
    case ADD_SYMBOL_NEW_POST:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export const AddPostActionCreator = (text) => {
  return ({
    type: ADD_POST,
  })
}
export const AddSymbolNewPostActionCreator = (text) => {
  return ({
    type: ADD_SYMBOL_NEW_POST,
    newText: text,
  })
}

export default profileReduser;
