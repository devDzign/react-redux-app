import * as actionType from "./actionTypes";
import productApi from "../../../services/productsAPI";

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

export const productRequest = () => (
    {
        type: actionType.PRODUCT_REQUEST
    }
)

export const productError = (error) => ({
    type: actionType.PRODUCT_ERROR,
    error
})

export const productReceive = (response) => ({
    type: actionType.PRODUCT_RECEIVED,
    data: response.data
})


export const productFetch = (id) => {
    console.log("dispatching...")
    return async (dispatch) => {
        try {
            dispatch(productRequest())
            const response = await productApi.findOneById(id)
            dispatch(productReceive(response))
        } catch (error) {
            dispatch(productError(error))
        }
    }
}
