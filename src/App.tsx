import React, {useEffect} from 'react';
import CounterView from "./components/counter-view/counter-view.component";
import {Button} from "react-bootstrap";
import CounterResetBtn from "./components/counter-buttons/counter-reset-button.component";
import CounterIncBtn from "./components/counter-buttons/counter-inc-button.component";
import UserList from "./components/users-list/user-list.component";
import {connect, MapDispatchToProps} from "react-redux";
import {usersFetchStart} from "./redux/users/users.actions";


interface IAppProps {}


const App: React.FC<IAppProps & IDispatchProps> = ({usersFetchStart}) => {
    useEffect(()=>{
        usersFetchStart();
    },[])
    return (
        <>
            <CounterView title={"Counter value"}/>
            <CounterView title={"Counter value"}/>
            <CounterView title={"Counter value"}/>
            <CounterView title={"Counter value"}/>
            <CounterView title={"Counter value"}/>
            <div className="m-2">
                <CounterResetBtn label="Reset"/>
                <CounterIncBtn label="Inc"/>
            </div>
            <div className="m-2">
                <CounterResetBtn label="Other Reset"/>
            </div>

            <UserList/>
        </>
    )
}


interface IDispatchProps {
    usersFetchStart():void
}

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IAppProps> = (dispatch) => ({
    usersFetchStart: ()=>dispatch(usersFetchStart())
})

export default connect(null, mapDispatchToProps)(App);
