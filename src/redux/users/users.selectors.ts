import {createSelector} from "reselect";
import {IRootState} from "../root-reducer";


const selectUsers = (state:IRootState) => state.users;


export const selectUserList = createSelector(
    [selectUsers],
    (users)=>users.userList
);

export const selectUsersLoading = createSelector(
    [selectUsers],
    (users)=>users.loading
);