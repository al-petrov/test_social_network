import React from "react"
import u from "./Users.module.css"
import NoFoto from "./Foto/NoFoto.png"
import * as axios from "axios";
import { NavLink } from "react-router-dom";

const Users = (props) => {
    debugger;


    return (
        <div>
            {/* <button onClick={getUsers}>Get Users</button> */}
            {props.users.map((item) => <div key={item.id} className={u.userLine}>
                
                <NavLink to={'/profile/' + item.id}>
                    <div className={u.leftSide}>
                        <img src={item.img ? item.img : NoFoto} />
                        {item.friends
                            ? <button onClick={() => props.unfollow(item.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(item.id)}>Follow</button>}
                    </div>

                    <div className={u.centralSide}>
                        <span><h4>{item.username}</h4></span>
                        <span>{item.userstatus}</span>
                    </div>
                    <div>
                        <span><h4>{item.country}</h4></span>
                        <span>{item.city}</span>
                    </div>
                </NavLink>
            </div>
            )}
        </div>
    )
}

export default Users;
