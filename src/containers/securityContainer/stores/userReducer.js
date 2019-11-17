import * as actionTypes from './actionTypes';

const initialState = {
    errors: null,
    user: null
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.USER_RECEIVED:
             if(action.data){
                 console.log("user====>",action.data.email)
             }
            return {
              ...state,
                user: action.data
            }
        case actionTypes.USER_ERROR:
            return {
                ...state,
                errors: action.errors
            }
        default:
            return state;
    }

};

export default userReducer;