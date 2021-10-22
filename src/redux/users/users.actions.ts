import usersActionTypes , {IUsersAction} from "./users.types";
import {User} from "../../core/types/user";

export const usersFetchStart = ():IUsersAction => ({
    type: usersActionTypes.FETCH_USERS_START
})

export const usersFetchFinish = (users: User[]):IUsersAction => ({
    type: usersActionTypes.FETCH_USERS_FINISH,
    payload: users
})