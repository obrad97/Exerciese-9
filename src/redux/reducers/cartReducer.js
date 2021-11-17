import { actionTypes } from "../constants/action-types";

const initialState = {
    items: [], 
    sum: 0,
    totalItems: 0,
}
let product;

export const cartReducer = (state = {...initialState}, action)=> {
    switch (action.type) {
        case actionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload],
                sum: state.sum += action.price,
                totalItems: state.totalItems+1,
            }
        case actionTypes.INCREMENT_CART_ITEM:
            product = state.items.findIndex((item)=> Number(item.id) === Number(action.payload.id));
            return{
                ...state,
                //items: [state.items[item].count+1],
                items: state.items.map((item, i)=> i === product ? {...item, count: item.count+1 } : item ),
                sum: state.sum += action.payload.price,
                totalItems: state.totalItems+1,
            }
        case actionTypes.DECREMENT_CART_ITEM:
            product = state.items.findIndex((item)=> Number(item.id) === Number(action.payload.id));
            return {
                ...state,
                items: state.items.map((item, i)=> i === product ? {...item, count: item.count-1} : item ),
                sum: state.sum -= action.payload.price,
                totalItems: state.totalItems-1,
            }
        case actionTypes.REMOVE_ITEM_FROM_CART:
            product = state.items.findIndex((item)=> Number(item.id) === Number(action.payload.id));
            let [removed] = state.items.splice(product, 1)
            return {
                ...state,
                sum: state.sum -= removed.count * removed.price,
                totalItems: state.totalItems - removed.count
            }
        default:
            return state
    }
}