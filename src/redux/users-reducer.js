const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
    usersData: [
        // { id: 1, userName: 'Alena', location: { country: "Russia", city: "Saint-P" }, friends: true, userStatus: "hellow, i'm new here!", img: "https://images.contentstack.io/v3/assets/blteb3182258f055636/blt3029d8349c7978ae/5c813c2fdb70ca0a3ffc20e6/xl-portraitimage-iconiclooks-ava.jpg?auto=webp" },
        // { id: 2, userName: 'Mom', location: { country: "Russia", city: "Saint-P" }, friends: true, userStatus: "hellow, i'm new here!", img: "https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg" },
        // { id: 3, userName: 'Vasya', location: { country: "Russia", city: "Saint-P" }, friends: true, userStatus: "hellow, i'm new here!", img: "" },
        // { id: 4, userName: 'Timur', location: { country: "Russia", city: "Saint-P" }, friends: true, userStatus: "hellow, i'm new here!", img: "https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg" },
        // { id: 5, userName: 'Dima', location: { country: "Russia", city: "Saint-P" }, friends: true, userStatus: "hellow, i'm new here!", img: "https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg" },
        // { id: 6, userName: 'Denis', location: { country: "Russia", city: "Saint-P" }, friends: true, userStatus: "hellow, i'm new here!", img: "https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg" },
    ],
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
            return { ...state, usersData: [...state.usersData, ...action.users] }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId: userId })

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId })

export const setUsersAC = (users) => ({ type: SET_USERS, users: users })

export default usersReducer;
