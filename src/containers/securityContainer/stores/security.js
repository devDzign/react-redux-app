import * as actionType from "./actionTypes";
import authAPI from "../../../services/authAPI";
import userAPI from "../../../services/usersAPI";

export const setAuthentication = (isLoggedIn, token=null) => {

    return (dispatch) => {
        dispatch(
            {
                type: actionType.SET_AUTHENTICATION,
                data: {
                    isLoggedIn: isLoggedIn,
                    token:token
                }

            }
        );
    }
}

export const loginRequest = () => (
    {
        type: actionType.LOGIN_REQUEST
    }
)

export const loginError = (errors) => ({
    type: actionType.LOGIN_ERROR,
    errors: errors
})

export const loginReceive = (token) => ({
    type: actionType.LOGIN_RECEIVED
})


export const loginFetch = ({username, password}, history) => {

    return async (dispatch) => {
        try {
            dispatch(loginRequest())
            const token = await authAPI.authenticate({username, password})

            await dispatch(loginReceive(token))
            await dispatch(meUser())
            await dispatch(setAuthentication(true,token))
            history.push('/')
        } catch (error) {
            console.log("ERROR ACTION", error.response.data)

            dispatch(loginError(error.response.data))
        }
    }
}


export const logoutFetch = () => {

    return async (dispatch) => {
        await authAPI.logout()
        dispatch(setAuthentication(false, null))
        dispatch(userReceive( {data: null}))
    }
}

export const userError = (error) => ({
    type: actionType.USER_ERROR,
    error: error
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