import { actionTypes } from "../constants/action-types";

export const addItems = (item) => {
    return {
        type: actionTypes.ADD_ITEM_TO_CART,
        payload: {...item, count: 1},
        price: item.price
    }
}

export const incrementItem = (item) => {
    return {
        type: actionTypes.INCREMENT_CART_ITEM,
        payload: item
    }
}

export const decrementItem = (item) => {
    return {
        type: actionTypes.DECREMENT_CART_ITEM,
        payload: item
    }
}

export const removeItem = (item)=> {
    return{
        type: actionTypes.REMOVE_ITEM_FROM_CART,
        payload: item
    }
}