// import {combineReducers} from "redux"
// import dialogsReduser from "./dialogs-reducer"
// import profileReduser from "./profile-reducer"
// import sidebarReducer from "./sidebar-reducer"

import { combineReducers, createStore } from "redux";
import dialogsReduser from "./dialogs-reducer";
import profileReduser from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReduser,
    messages: dialogsReduser,
    sidebar: sidebarReducer,

});

let store = createStore(reducers);


export default store;

// let reducers = combineReducers({
//     profilePage: profileReduser(),
//     dialogsReduser: dialogsReduser(),
//     sidebar: sidebarReducer()
// })

