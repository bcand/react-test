import React from "react";
import {IUser, User} from "../../core/types/user";

const UserItem:React.FC<User> = ({name, id, avatar, createdAt})=> (
    <div className="my-2">
        <img src={avatar}/>
        <h5>{name}</h5>
        <div>{createdAt.toString()}</div>
    </div>
)

export default UserItem;