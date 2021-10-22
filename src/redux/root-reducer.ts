import {combineReducers, Reducer} from "redux";
import {persistReducer} from "redux-persist";
import {PersistConfig} from "redux-persist/es/types";
import {DefaultRootState} from "react-redux";
import storage from 'redux-persist/lib/storage'


import {ICounterState} from "./counter/counter.types";


import counterReducer from "./counter/counter.reducer";
import {IUsersState} from "./users/users.types";
import usersReducer from "./users/users.reducer";

const persistConfig:PersistConfig<IRootState> = {
    key: 'root',
    storage
}
export interface IRootState extends DefaultRootState{
    counter: ICounterState,
    users: IUsersState
}



export const rootReducer = combineReducers<IRootState>({
    counter: counterReducer,
    users: usersReducer
})

export default persistReducer<IRootState>(persistConfig, rootReducer);
