import React from "react"
import { connect } from "react-redux"
import * as axios from "axios"
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from "../../redux/users-reducer"
import Users from "./UsersC"
import Preloader from "../Common/Preloader/Preloader"

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        if (this.props.users.length === 0) {
            axios.get(`http://barabulka.site:8080/api/user?size=${this.props.pageSize}&current=${this.props.currentPage}`)
                .then(response => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(response.data.users);
                    this.props.setTotalUsersCount(response.data.count);                  
                });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`http://barabulka.site:8080/api/user?size=${this.props.pageSize}&current=${pageNumber}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.users);
            });
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
        </>
    }

}

const mapStateToProps = (state) => {
    debugger;
    return {
        users: state.users.usersData,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
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
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);