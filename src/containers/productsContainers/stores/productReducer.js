import * as actionTypes from './actionTypes';

const initialState = {
    product: null,
    isFetching: false,
    errors: null
};

const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.PRODUCT_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case actionTypes.PRODUCT_RECEIVED:
            return {
              ...state,
                product: action.data,
                isFetching: false
            }
        case actionTypes.PRODUCT_ERROR:
            return {
                ...state,
                isFetching: false,
                product: null,
                errors: action.errors
            }
        default:
            return state;

    }

};

export default productReducer;