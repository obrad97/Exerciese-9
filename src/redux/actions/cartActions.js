import { actionTypes } from "../constants/action-types";

export const addItems = (item) => {
    return {
        type: actionTypes.ADD_ITEM_TO_CART,
        payload: item
    }
}