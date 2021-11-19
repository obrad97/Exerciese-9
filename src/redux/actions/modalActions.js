import { actionTypes } from "../constants/action-types";

export const displayModal = (title) => {
    console.log(title);
    return {
        type: actionTypes.DISPLAY_MODAL,
        payload: title
    }
}

export const hideModal = () => {
    return {
        type: actionTypes.HIDE_MODAL
    }
}