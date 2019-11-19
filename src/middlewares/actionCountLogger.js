import * as actionType from '../store/actions/actionTypes'
import {incrementActionCount} from "../store/actions/actions";


export const actionCounter = (store) => (next) => (action) => {
    if (actionType.INCREMENT_ACTION8COUNT !== action.type) {
        store.dispatch(incrementActionCount())
    }
    next(action)
}