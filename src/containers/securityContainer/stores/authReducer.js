import * as actionTypes from './actionTypes';

const initialState = {
    isAuth: false,
    token: null
};

const authReducer = (state = initialState, action) => {
    if (action.type === actionTypes.SET_AUTHENTICATION) {
        return {
            ...state,
            isAuth: action.data.isLoggedIn,
            token: action.data.token,
        }
    } else {
        return state;
    }
};

export default authReducer;