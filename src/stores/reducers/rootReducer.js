import {combineReducers} from "redux";
import { reducer as form } from "redux-form"
import authReducer from "../../containers/securityContainer/stores/authReducer";
import loginReducer from "./../../containers/securityContainer/stores/loginReducer";
import listProductsReducer from "../../containers/productsContainers/stores/listProductsReducer";
import productReducer from '../../containers/productsContainers/stores/productReducer';


const rootReducer = combineReducers({
    form,
    rootAuthReducer: authReducer,
    rootListProductsReducer: listProductsReducer,
    rootLoginReducer: loginReducer,
    rootProductReducer: productReducer
});

export default rootReducer;




