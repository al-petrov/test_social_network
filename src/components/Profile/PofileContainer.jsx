import React from "react";
import { connect } from "react-redux";
import Profile from "./Pofile";
import { setUserProfile } from "../../redux/profile-reducer";
import * as axios from "axios";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.myID;
        debugger;
        axios.get(`http://barabulka.site:8080/api/user/` + userId)
            .then(response => {
                debugger
                this.props.setUserProfile(response.data);                 
            })
    }

  render() {
    return (
      <Profile {...this.props} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  myID: state.profilePage.myID,
  a: 13  
})

let withURLDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (withURLDataContainer);