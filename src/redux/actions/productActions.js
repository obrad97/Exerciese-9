import { actionTypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: actionTypes.SELECTED_PRDOUCT,
        payload: product,
    };
};

export const removeSelectedProduct = (product) => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT,
    };
};

export const sortItems = (sorted) => {
    return {
        type: actionTypes.SORT_ITEMS,
        payload: sorted,
    }
}

export const filterItems = (filtered) => {
    return{
        type: actionTypes.FILTER_ITEMS,
        payload: filtered,
    }
}

export const setCatergotyFilter = (categories) => {
    return{
        type: actionTypes.SET_PRODUCT_CATEGORY_FILER,
        payload: categories,
    }
}