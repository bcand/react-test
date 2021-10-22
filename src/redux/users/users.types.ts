import {Action} from "redux";
import {User} from "../../core/types/user";

export interface IUsersAction extends Action<usersActionTypes> {
    payload?: any
}

export interface IUsersState {
    userList: User[]
    loading: boolean
}

enum usersActionTypes {
    FETCH_USERS_START = "FETCH_USERS_START",
    FETCH_USERS_FINISH = "FETCH_USERS_FINISH"
}

 export default usersActionTypes