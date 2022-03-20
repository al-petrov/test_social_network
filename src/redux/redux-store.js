import { combineReducers, createStore } from "redux";
import dialogsReduser from "./dialogs-reducer";
import profileReduser from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReduser,
    messages: dialogsReduser,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;

