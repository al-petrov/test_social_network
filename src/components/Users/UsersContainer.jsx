import React from "react"
import { connect } from "react-redux"
import * as axios from "axios"
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/users-reducer"
import Users from "./UsersC"

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`http://barabulka.site:8080/api/user?size=${this.props.pageSize}&current=${this.props.currentPage}`)
                .then(response => {
                    this.props.setUsers(response.data.users);
                    this.props.setTotalUsersCount(response.data.count);
                });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://barabulka.site:8080/api/user?size=${this.props.pageSize}&current=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.users);
            });
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }

}

const mapStateToProps = (state) => {
    debugger;
    return {
        users: state.users.usersData,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);