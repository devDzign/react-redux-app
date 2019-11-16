import * as actionType from "./actionTypes";
import authAPI from "../../../services/authAPI";

export const setAuthentication = (isLoggedIn) => {

    return (dispatch) => {
        dispatch(
            {
                type: actionType.SET_AUTHENTICATION,
                isLoggedIn: isLoggedIn
            }
        );
    }
}

export const loginRequest = () => (
    {
        type: actionType.LOGIN_REQUEST
    }
)

export const loginError = (error) => ({
    type: actionType.LOGIN_ERROR,
    error
})

export const loginReceive = (response) => ({
    type: actionType.LOGIN_RECEIVED
})


export const loginFetch = ({username, password}, history) => {

    return async (dispatch) => {
        try {
            dispatch(loginRequest())
            const response = await authAPI.authenticate({username, password})
            await dispatch(loginReceive(response))
            await dispatch(setAuthentication(true))
            history.push('/')
        } catch (error) {
            dispatch(loginError(error))
        }
    }
}

