import React from "react";
import p from './Profile.module.css';

const Profile = () => {
    return (
    <div>
    <div>
      <img src='https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM'></img>  
    </div>
    <div>
      ava + description
    </div>
    <div className={p.content}>
      My posts
      <div>
        New posts
      </div>

      <div>
        <div className={p.item}>
          post 1
        </div>
        <div className={p.item}>
          post 2
        </div>
        <div className={p.item}>
          post 3
        </div>
      </div>
    </div>
  </div>)
}

export default Profile;