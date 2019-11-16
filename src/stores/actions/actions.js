import * as actionType from './actionTypes'
import productApi from '../../services/productsAPI'
import authAPI from "../../services/authAPI";

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

export const productsListRequest = () => (
    {
        type: actionType.PRODUCTS_LIST_REQUEST
    }
)

export const productsListError = (error) => ({
    type: actionType.PRODUCTS_LIST_ERROR,
    error
})

export const productsListReceive = (response) => ({
    type: actionType.PRODUCTS_LIST_RECEIVED,
    data: response.data
})


export const productsListFetch = (itemPerPage, currentPage) => {
    console.log("dispatching...")
    return async (dispatch) => {
        try {
            dispatch(productsListRequest())
            const response = await productApi.findAll(itemPerPage, currentPage)
              dispatch(productsListReceive(response))
        } catch (error) {
             dispatch(productsListError(error))
        }
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











