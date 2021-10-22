import counterActionTypes, {ICounterAction} from "./counter.types";

export const counterInc = ():ICounterAction => ({
    type: counterActionTypes.COUNTER_INC
})

export const counterReset = ():ICounterAction => ({
    type: counterActionTypes.COUNTER_RESET
})