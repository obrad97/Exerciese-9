import { actionTypes } from "../constants/action-types";

const initialState = {
    items: [], 
    sum:0
}

export const cartReducer = (state = {...initialState}, action)=> {
    switch (action.type) {
        case actionTypes.ADD_ITEM_TO_CART:
            state.items.push(action.payload)
            return state
        default:
            return state
    }
}