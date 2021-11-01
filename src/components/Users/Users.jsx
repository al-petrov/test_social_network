import React from "react"
import u from "./Users.module.css"
import NoFoto from "./Foto/NoFoto.png"
import * as axios from "axios";

const Users = (props) => {
    debugger;
    if (props.users.length === 0) {
        
        axios.get("");

        props.setUsers([
            { id: 1, userName: 'Alena', location: { country: "Russia", city: "Saint-P" }, friends: true, userStatus: "hellow, i'm new here!", img: "https://images.contentstack.io/v3/assets/blteb3182258f055636/blt3029d8349c7978ae/5c813c2fdb70ca0a3ffc20e6/xl-portraitimage-iconiclooks-ava.jpg?auto=webp" },
            { id: 2, userName: 'Mom', location: { country: "Russia", city: "Saint-P" }, friends: true, userStatus: "hellow, i'm new here!", img: "https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg" },
            { id: 3, userName: 'Vasya', location: { country: "Russia", city: "Saint-P" }, friends: true, userStatus: "hellow, i'm new here!", img: "" },
            { id: 4, userName: 'Timur', location: { country: "Russia", city: "Saint-P" }, friends: true, userStatus: "hellow, i'm new here!", img: "https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg" },
            { id: 5, userName: 'Dima', location: { country: "Russia", city: "Saint-P" }, friends: true, userStatus: "hellow, i'm new here!", img: "https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg" },
            { id: 6, userName: 'Denis', location: { country: "Russia", city: "Saint-P" }, friends: true, userStatus: "hellow, i'm new here!", img: "https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg" },
        ])
    }
    return (
        <div>
            {props.users.map((item) => <div key={item.id} className={u.userLine}>
                <div className={u.leftSide}>
                    <img src={item.img ? item.img : NoFoto} />
                    {item.friends
                        ? <button onClick={() => props.unfollow(item.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(item.id)}>Follow</button>}
                </div>
                <div className={u.centralSide}>
                    <span><h4>{item.userName}</h4></span>
                    <span>{item.userStatus}</span>
                </div>
                <div>
                    <span><h4>{item.location.country}</h4></span>
                    <span>{item.location.city}</span>
                </div>
            </div>
            )}
        </div>
    )
}

export default Users;