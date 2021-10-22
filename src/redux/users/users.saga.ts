import {call, all, takeLatest, put} from "redux-saga/effects";
import usersActionTypes, {IUsersAction} from "./users.types";
import {User} from "../../core/types/user";
import {Service} from "../../core/services/api-service";
import {usersFetchFinish} from "./users.actions";


function* fetchUsers() {
    try{
        const users: User[] = yield call(Service.getUsers)
        yield put<IUsersAction>(usersFetchFinish(users))
    } catch (e) {
        console.log(e)
    }
}

function* onUsersFetchStart(){
    yield takeLatest(usersActionTypes.FETCH_USERS_START, fetchUsers)
}

export function* usersSagas() {
    yield all([
        call(onUsersFetchStart)
    ])
}