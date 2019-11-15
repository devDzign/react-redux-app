import * as actionType from './actionTypes'
import productApi from '../../services/productsAPI'

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












