import {combineReducers} from "redux";
import { reducer as form } from "redux-form"
import authReducer from "../../containers/securityContainer/stores/authReducer";
import loginReducer from "./../../containers/securityContainer/stores/loginReducer";
import listProductsReducer from "../../containers/productsContainers/stores/listProductsReducer";
import productReducer from '../../containers/productsContainers/stores/productReducer';
import userReducer from '../../containers/securityContainer/stores/userReducer'


const rootReducer = combineReducers({
    form,
    rootAuthReducer: authReducer,
    rootListProductsReducer: listProductsReducer,
    rootLoginReducer: loginReducer,
    rootProductReducer: productReducer,
    rootUserReducer: userReducer
});

export default rootReducer;




