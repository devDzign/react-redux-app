import * as actionTypes from './actionTypes';

const initialState = {
    products: null,
    isFetching: false,
    totalItems: 0,
    errors: null
};

const listProductsReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.PRODUCTS_LIST_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case actionTypes.PRODUCTS_LIST_RECEIVED:
            return {
              ...state,
                products: action.data['hydra:member'],
                totalItems: action.data['hydra:totalItems'],
                isFetching: false
            }
        case actionTypes.PRODUCTS_LIST_ERROR:
            return {
                ...state,
                isFetching: false,
                products: null,
                errors: action.errors
            }
        default:
            return state;

    }

};

export default listProductsReducer;