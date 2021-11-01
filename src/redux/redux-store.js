import { combineReducers, createStore } from "redux";
import dialogsReduser from "./dialogs-reducer";
import profileReduser from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReduser,
    messages: dialogsReduser,
    sidebar: sidebarReducer,
    users: usersReducer,

});

let store = createStore(reducers);


export default store;

