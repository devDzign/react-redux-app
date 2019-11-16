import * as actionTypes from './actionTypes';

const initialState = {
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    if (action.type === actionTypes.SET_AUTHENTICATION) {
        return {
            ...state,
            isAuth: action.isLoggedIn
        }
    } else {
        return state;
    }
};

export default authReducer;