import * as actionTypes from './actionTypes';

const initialState = {
    isFetching: false,
    errors: null
};

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.LOGOUT_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case actionTypes.LOGIN_RECEIVED:
            return {
              ...state,
                isFetching: false
            }
        case actionTypes.LOGIN_ERROR:
            return {
                ...state,
                isFetching: false,
                errors: action.errors
            }
        default:
            return state;
    }

};

export default loginReducer;