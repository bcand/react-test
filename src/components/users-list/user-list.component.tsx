import React from "react";
import {User} from "../../core/types/user";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {IRootState} from "../../redux/root-reducer";
import {usersFetchStart} from "../../redux/users/users.actions";
import {selectUserList, selectUsersLoading} from "../../redux/users/users.selectors";
import UserItem from "../user-item/user-item.component";
interface IUserListProps {}

const UserList: React.FC<IUserListProps & IStateProps> = ({userList,loading}) => {
    return(
        (loading) ? <div>Loading....</div> :
            <div>
                {
                    (userList?.length > 0) ?
                        userList.map(({id, avatar, createdAt, name})=>(
                            <UserItem key={id} id={id} avatar={avatar} createdAt={createdAt} name={name}/>
                        )) : <div>No Users</div>
                }
            </div>
    )
}

interface IStateProps {
    userList: User[],
    loading: boolean
}


const mapStateToProps: MapStateToProps<IStateProps, IUserListProps, IRootState> = (state) => ({
    userList: selectUserList(state),
    loading: selectUsersLoading(state)
})



export default connect(mapStateToProps)(UserList);