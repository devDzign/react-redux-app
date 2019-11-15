import {combineReducers} from "redux";
import authReducer from "./authReducer";
import listProductsReducer from "./listProductsReducer";


const rootReducer = combineReducers({
    rootAuthReducer: authReducer,
    rootListProductsReducer: listProductsReducer
});

export default rootReducer;




