import {Action} from "redux";

export interface ICounterAction extends Action<counterActionTypes> {
    payload?: any
}

export interface ICounterState {
    number: number
}

enum counterActionTypes {
    COUNTER_INC = "COUNTER_INC",
    COUNTER_RESET = "COUNTER_RESET"
}

 export default counterActionTypes