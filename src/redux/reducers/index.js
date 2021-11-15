import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import {productReducer, selectedProductRedcuer} from "./productReducer"

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductRedcuer,
    cartItems: cartReducer,
});

export default reducers;