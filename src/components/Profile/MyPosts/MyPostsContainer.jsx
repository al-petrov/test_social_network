import { connect } from 'react-redux';
import { addPost, addSymbolNewPost, setUserPosts } from '../../../redux/profile-reducer';
import React from 'react';
import axios from 'axios';
import MyPosts from './MyPosts';
import { withRouter } from 'react-router';

class MyPostsContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.myID;

    if (userId) {
      axios.get(`http://barabulka.site:8080/api/posts?size=20&current=1&user_id=${userId}`).then(response => {
        this.props.setUserPosts(response.data.posts);
        // this.props.addPost(response.data);
      });
    }
  }

  addPostMethod = () => {
    if (this.props.myID) {
      axios
        .post(
          `http://barabulka.site:8080/api/posts`,
          {
            userId: this.props.myID,
            postText: this.props.newPostText,
            likeCount: 0,
          },
          {
            withCredentials: true,
          },
        )
        .then(response => {
          this.props.addPost();
        })
        .catch(err => {
          console.log('hi');

          console.log(err.response);
        });
    }
  };

  render() {
    return <MyPosts {...this.props} addPost={this.addPostMethod} />;
  }
}

let mapStateToProps = state => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
  profile: state.profilePage.profile,

  isAuth: state.auth.isAuth,
  myID: state.auth.myID,
  userName: state.auth.userName,
  userStatus: state.auth.userStatus,
  userImg: state.auth.userImg,
  login: state.auth.login,
});

let withURLDataContainer = withRouter(MyPostsContainer);

export default connect(mapStateToProps, { addSymbolNewPost, setUserPosts })(withURLDataContainer);
