import { actionTypes } from "../constants/action-types";

const initialState = {
    products: [],
    showProducts: [],
    categories: [],
};
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return {
                ...state, 
                products: [...action.payload], 
                showProducts: [...action.payload]};
        case actionTypes.SORT_ITEMS: 
            return {
                ...state,
                showProducts: [...action.payload]
            }
        case actionTypes.FILTER_ITEMS:
            return{
                ...state,
                showProducts: [...action.payload]
            }
        case actionTypes.SET_PRODUCT_CATEGORY_FILER: 
        return {
            ...state,
            categories: [...action.payload]
        }
        default:
            return state;
    }
}

export const selectedProductRedcuer = (state={}, {type, payload}) => {
    switch (type) {
        case actionTypes.SELECTED_PRDOUCT:
            return {...state, ...payload};
            case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}
