import { actionTypes } from "../constants/action-types";

let initialState = {
    title: "Product title",
    display: false,
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DISPLAY_MODAL:
            return {
                ...state,
                title: action.payload,
                display: true,
            }
        case actionTypes.HIDE_MODAL:
            return {
                ...state,
                title: "Product title",
                display: false,
            }
        default:
            return state
    }
}