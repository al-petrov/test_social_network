import { connect } from "react-redux";
import { addPost, addSymbolNewPost, setUserPosts } from "../../../redux/profile-reducer";
import React from "react";
import axios from "axios";
import MyPosts from "./MyPosts"
import { withRouter } from "react-router";

class MyPostsContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.myID;
    debugger;
    axios.get(`http://barabulka.site:8080/api/posts?size=20&current=1&user_id=${userId}`)
      .then(response => {
        debugger
        this.props.setUserPosts(response.data.posts);
      })
  }

  render() {
    return (
      <MyPosts {...this.props} />
    )  
  }
}

let mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
  myID: state.profilePage.myID,
})

let withURLDataContainer = withRouter(MyPostsContainer);

export default connect(mapStateToProps, { addPost, addSymbolNewPost, setUserPosts })(withURLDataContainer);