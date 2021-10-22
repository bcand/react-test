import React from "react";
import {Button} from "react-bootstrap";
import {MapDispatchToProps} from "react-redux";
import {counterInc} from "../../redux/counter/counter.actions";
import {connect} from "react-redux";


interface IProps {
    label: string
}

const CounterIncBtn: React.FC<IProps & IDispatchActions> = ({label, inc}) => (
    <Button className="m-2" onClick={inc} variant="success">{label}</Button>
);


interface IDispatchActions {
    inc(): void
}

const mapDispatchToProps: MapDispatchToProps<IDispatchActions, IProps> = (dispatch) => ({
    inc: ()=> dispatch(counterInc())

})


export default connect(null, mapDispatchToProps)(CounterIncBtn)


