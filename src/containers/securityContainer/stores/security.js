import * as actionType from "./actionTypes";
import authAPI from "../../../services/authAPI";
import userAPI from "../../../services/usersAPI";

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
    type: actionType.USER_RECEIVED
})


export const loginFetch = ({username, password}, history) => {

    return async (dispatch) => {
        try {
            dispatch(loginRequest())
            const token = await authAPI.authenticate({username, password})

            await dispatch(loginReceive(token))
            await dispatch(meUser())
            await dispatch(setAuthentication(true))
            history.push('/')
        } catch (error) {
            dispatch(loginError(error))
        }
    }
}


export const logoutFetch = () => {

    return async (dispatch) => {
        await authAPI.logout()
        dispatch(setAuthentication(false))
    }
}

export const userError = (error) => ({
    type: actionType.USER_ERROR,
    error
})

export const userReceive = (response) => ({
    type: actionType.USER_RECEIVED,
    data: response.data
})

export const meUser = () => {

    return async (dispatch) => {
        try {
            const response = await userAPI.me()
            dispatch(userReceive(response))
        } catch (error) {
            dispatch(userError(error))
        }
    }
}