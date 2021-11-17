import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import {productReducer, selectedProductRedcuer} from "./productReducer"
import { modalReducer } from "./modalReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductRedcuer,
    cartItems: cartReducer,
    modal: modalReducer,
});

export default reducers;