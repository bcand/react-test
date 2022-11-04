import usersActionTypes, {IUsersAction, IUsersState} from "./users.types";


const INITIAL_STATE: IUsersState = {
    userList: [],
    loading: false
}

const usersReducer = (state:IUsersState = INITIAL_STATE, action: IUsersAction) => {
    switch (action.type) {
        case usersActionTypes.FETCH_USERS_START:
            return {
                ...state,
                loading: true
            }
        case usersActionTypes.FETCH_USERS_FINISH:
            console.log()
            return {
                ...state,
                userList: action.payload,
                loading: false
            }
        default:
            return {
                ...state
            }
    }
}

export default usersReducer;