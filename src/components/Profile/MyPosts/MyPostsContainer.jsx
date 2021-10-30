import { connect } from "react-redux";
import { AddPostActionCreator, AddSymbolNewPostActionCreator } from "../../../redux/profile-reducer";
import MyPost from "./MyPosts";


let mapStateToProps = (state) => {
  debugger;
  return {myPosts: state.profilePage}
}

let mapDispatchToProps = (dispatch) => {
  return({
    addPost: () => dispatch(AddPostActionCreator()),
    postChanged: (text) => dispatch(AddSymbolNewPostActionCreator(text)),
  })
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPost);

export default MyPostsContainer;