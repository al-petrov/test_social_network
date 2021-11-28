const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

const initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    myID: "999",
}


const usersReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {

        case UNFOLLOW:
            return ({
                ...state,
                usersData: state.usersData.map((item) => item.id === action.userId ? { ...item, friends: false } : item),

            })
        case FOLLOW:
            return ({
                ...state,
                usersData: state.usersData.map((item) => item.id === action.userId ? { ...item, friends: true } : item),
            })
        case SET_USERS:
            return { ...state, usersData: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId })

export const unfollow = (userId) => ({ type: UNFOLLOW, userId })

export const setUsers = (users) => ({ type: SET_USERS, users })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default usersReducer;
