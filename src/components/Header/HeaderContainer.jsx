import React from "react"
import { connect } from "react-redux"
import * as axios from "axios"
import { setAuthUserData } from "../../redux/auth-reducer"
import Header from "./Header"
import { withRouter } from "react-router-dom"

class HeaderAPIComponent extends React.Component {
    componentDidMount() {
        axios.get(`http://barabulka.site:8080/api/auth`, {
            withCredentials: true
        })
            .then(response => {

                if (response.data.isLogined === true) {
                    this.props.setAuthUserData(response.data.id,
                        response.data.login,
                        response.data.username,
                        response.data.img,
                        response.data.userstatus)
                }

            })
            .catch(err => {
                console.log('hi')
                console.log(err.response);
            });
    }
    render() {
        return <Header {...this.props} />

    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    myID: state.auth.myID,
    userName: state.auth.userName,
    userStatus: state.auth.userStatus,
    userImg: state.auth.userImg,
    login: state.auth.login,
});

let withUrlHeaderAPIComponent = withRouter(HeaderAPIComponent);

export default connect(mapStateToProps, { setAuthUserData })(withUrlHeaderAPIComponent);