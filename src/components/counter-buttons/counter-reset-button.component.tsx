import React from "react";
import {Button} from "react-bootstrap";
import {MapDispatchToProps} from "react-redux";
import {counterReset} from "../../redux/counter/counter.actions";
import {connect} from "react-redux";


interface IProps {
    label: string
}

const CounterResetBtn: React.FC<IProps & IDispatchActions> = ({label, reset}) => (
    <Button className="m-2" onClick={reset} variant="outline-danger">{label}</Button>
);


interface IDispatchActions {
    reset(): void
}

const mapDispatchToProps: MapDispatchToProps<IDispatchActions, IProps> = (dispatch) => ({
    reset: ()=> dispatch(counterReset())

})


export default connect(null, mapDispatchToProps)(CounterResetBtn)


