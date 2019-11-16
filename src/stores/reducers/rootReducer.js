import {combineReducers} from "redux";
import { reducer as form } from "redux-form"
import authReducer from "./authReducer";
import listProductsReducer from "./listProductsReducer";
import loginReducer from "./loginReducer";


const rootReducer = combineReducers({
    form,
    rootAuthReducer: authReducer,
    rootListProductsReducer: listProductsReducer,
    rootLoginReducer: loginReducer
});

export default rootReducer;




