import React from "react"

class User extends React.Component {
    render() {
        return <div>
        {this.props.users.map((item) => <div key={item.id} className={u.userLine}>
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

    }

}

export default User;