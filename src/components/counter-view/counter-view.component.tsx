import React from "react";
import {connect, MapStateToProps} from "react-redux";
import {IRootState} from "../../redux/root-reducer";
import {selectCounterNumber} from "../../redux/counter/counter.selectors";

interface IProps {
    title: string
}

const CounterView:React.FC<IProps & IStateProps> = ({title, num}) => (
    <div className="p-3 m-3 d-inline-block bg-info">
        <h2>{title}</h2>
        {num}
    </div>
)

interface IStateProps {
    num: number
}

const mapStateToProps: MapStateToProps<IStateProps, IProps, IRootState> = (state) => ({
    num: selectCounterNumber(state)
})


export default connect(mapStateToProps)(CounterView);