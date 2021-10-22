import counterActionTypes, {ICounterAction, ICounterState} from "./counter.types";

const INITIAL_STATE: ICounterState = {
    number: 0
}

const counterReducer = (state:ICounterState = INITIAL_STATE, action: ICounterAction) => {
    switch (action.type) {
        case counterActionTypes.COUNTER_INC:
            return {
                ...state,
                number: state.number + 1
            }
        case counterActionTypes.COUNTER_RESET:
            return {
                ...INITIAL_STATE
            }
        default:
            return {
                ...state
            }
    }
}

export default counterReducer;