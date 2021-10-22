import {createSelector} from "reselect";
import {IRootState} from "../root-reducer";


const selectCounter = (state:IRootState) => state.counter;


export const selectCounterNumber = createSelector(
    [selectCounter],
    (counter)=>counter.number
);
